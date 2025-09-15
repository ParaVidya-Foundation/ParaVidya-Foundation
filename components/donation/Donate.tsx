"use client"
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const PaymentPage = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [amount, setAmount] = useState('');
  const [error, setError] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !email || !amount) {
      setError('All fields are required.');
      return;
    }
    if (!/^\d{10}$/.test(phone)) {
      setError('Please enter a valid 10-digit phone number.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    if (parseFloat(amount) <= 0) {
      setError('Amount must be greater than zero.');
      return;
    }

    setIsProcessing(true);
    setError('');
    const paymentData = { name, phone, email, amount: parseFloat(amount) * 100 };
    try {
      const response = await fetch('/api/payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRF-Token': 'token-from-server', // Replace with actual CSRF token
        },
        body: JSON.stringify(paymentData),
        credentials: 'same-origin',
      });

      if (response.ok) {
        const result = await response.json();
        router.push(result.paymentUrl);
      } else {
        const errorData = await response.json();
        setError(errorData.message || 'Payment initiation failed. Please try again.');
      }
    } catch {
      setError('An unexpected error occurred. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-md border border-gray-200">
        <div>
          <h2 className="text-4xl font-semibold text-gray-900 text-center tracking-tight">Donation </h2>
          <p className="mt-2 text-sm text-gray-600 text-center">Enter your details for a secure transaction</p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit} noValidate>
          {error && <p className="text-red-600 text-sm text-center">{error}</p>}
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out"
                placeholder="Enter your full name"
                autoComplete="name"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out"
                placeholder="Enter 10-digit phone number"
                autoComplete="tel"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out"
                placeholder="Enter your email"
                autoComplete="email"
              />
            </div>
            <div>
              <label htmlFor="amount" className="block text-sm font-medium text-gray-700">Amount (INR)</label>
              <input
                id="amount"
                name="amount"
                type="number"
                required
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out"
                placeholder="Enter amount"
                step="0.01"
                min="1"
                autoComplete="off"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-6 border border-transparent text-sm font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out disabled:opacity-50"
              disabled={isProcessing || !name || !phone || !email || !amount}
            >
              {isProcessing ? 'Processing...' : 'Proceed to Payment'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PaymentPage;