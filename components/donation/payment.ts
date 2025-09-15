"use client"

import { NextApiRequest, NextApiResponse } from 'next';
import Razorpay from 'razorpay';
import { getCsrfToken } from 'next-auth/react';
import nodemailer from 'nodemailer';

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID!,
  key_secret: process.env.RAZORPAY_KEY_SECRET!,
});

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: parseInt(process.env.EMAIL_PORT || '587'),
  secure: process.env.EMAIL_PORT === '465', // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const csrfToken = await getCsrfToken({ req });
  if (req.headers['x-csrf-token'] !== csrfToken) {
    return res.status(403).json({ error: 'Invalid CSRF token' });
  }

  const { name, phone, email, amount } = req.body;

  if (!name || !phone || !email || !amount) {
    return res.status(400).json({ error: 'All fields are required' });
  }
  if (!/^\d{10}$/.test(phone)) {
    return res.status(400).json({ error: 'Invalid phone number' });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'Invalid email address' });
  }
  if (parseFloat(amount) <= 0) {
    return res.status(400).json({ error: 'Amount must be greater than zero' });
  }

  try {
    const options = {
      amount: amount,
      currency: 'INR',
      receipt: `receipt_${Date.now()}`,
      payment_capture: 1,
      notes: {
        name,
        phone,
        email,
      },
    };

    const order = await razorpay.orders.create(options);

    // Send confirmation email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Payment Receipt - Confirmation',
      text: `Dear ${name},\n\nThank you for your payment of ₹${amount / 100} on ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}. Your transaction is being processed. Order ID: ${order.id}\n\nRegards,\nYour Payment Team`,
      html: `<p>Dear ${name},</p><p>Thank you for your payment of ₹${amount / 100} on ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}. Your transaction is being processed. Order ID: ${order.id}</p><p>Regards,<br>Your Payment Team</p>`,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ paymentUrl: `/api/payment/confirm?orderId=${order.id}`, orderId: order.id });
  } catch {
    res.status(500).json({ error: 'Failed to create order or send confirmation' });
  }
}