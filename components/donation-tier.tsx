export function DonationTier({
  amount,
  title,
  description,
  highlight = false,
}: {
  amount: string
  title: string
  description: string
  highlight?: boolean
}) {
  return (
    <div
      className={`rounded-xl border p-6 ${highlight ? "border-[var(--color-primary)] bg-[var(--color-primary)]/5" : "border-black/10 bg-white"}`}
    >
      <div className="text-sm text-gray-600">Suggested</div>
      <div className="mt-1 font-serif text-3xl">
        {amount}
      </div>
      <div className="mt-2 font-medium">{title}</div>
      <p className="mt-1 text-sm text-gray-700">{description}</p>
    </div>
  )
}
