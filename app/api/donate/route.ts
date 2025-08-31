import { NextResponse } from "next/server"

export async function POST() {
  return NextResponse.json(
    { ok: true, message: "Donation endpoint placeholder. Connect Stripe/UPI to process payments." },
    { status: 200 },
  )
}
