export default function SupportBlock() {
  return (
    <section className="rounded-xl border bg-gray-50 p-8 text-center">
      <h3 className="font-serif text-2xl" style={{ fontFamily: "var(--font-serif)" }}>
        Support Our Mission
      </h3>
      <p className="mt-2 text-gray-700">
        Your contribution helps us provide free education and meals to children in need.
      </p>
      <button
        onClick={() => window.location.href = "/donate"}
        className="mt-4 inline-block rounded-md bg-[var(--color-brand)] px-6 py-3 text-white hover:bg-[#e68a2d] transition-colors cursor-pointer"
      >
        Donate Now
      </button>
    </section>
  )
}
