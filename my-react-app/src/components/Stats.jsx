export default function Stats() {
  return (
    <section id="retailers"  className="bg-white py-28">
      <div className="max-w-[90rem] mx-auto px-10">

        {/* ONLY ONE GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">

          {/* LEFT COLUMN */}
          <div>
            <h2 className="text-6xl font-extrabold leading-tight text-gray-900">
              Field Tested and{" "}
              <span className="bg-gradient-to-r from-orange-500 to-green-500 bg-clip-text text-transparent">
                Proven
              </span>
            </h2>

            <p className="mt-6 text-lg text-gray-600 max-w-xl">
              Live across 10+ retailers from major chains to independents.
              Our smart carts deliver measurable results.
            </p>

            {/* Testimonial */}
            <div className="mt-14 bg-white rounded-2xl shadow-xl p-8 max-w-xl">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-orange-500 to-green-500 flex items-center justify-center text-white font-bold">
                  JD
                </div>
                <div>
                  <h4 className="font-bold">John Davis</h4>
                  <p className="text-sm text-gray-500">
                    CTO, FreshMarket Retail
                  </p>
                </div>
              </div>

              <p className="mt-6 italic text-gray-700">
                “Caper carts have transformed our customer experience.
                We’ve seen a 25% increase in basket size and our customers
                love the seamless checkout.”
              </p>

              <div className="flex gap-1 mt-4 text-yellow-400">★★★★★</div>
            </div>
          </div>

          {/* RIGHT COLUMN — STATS (ONLY HERE) */}
          <div className="flex flex-col gap-10">

            <StatCard
              value="70+"
              title="Net Promoter Score"
              subtitle="from customers*"
              width="70%"
            />

            <StatCard
              value="25%"
              title="Increase in Basket Size"
              subtitle="vs traditional cart usage"
              width="60%"
            />

            <StatCard
              value="30min"
              title="Average Screen Engagement"
              subtitle="per shopping session"
              width="85%"
            />

          </div>
        </div>
      </div>
    </section>
  );
}

function StatCard({ value, title, subtitle, width }) {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-8">
      <div className="flex items-end gap-6">
        <h3 className="text-6xl font-extrabold">{value}</h3>
        <div>
          <h4 className="font-bold">{title}</h4>
          <p className="text-sm text-gray-500">{subtitle}</p>
        </div>
      </div>

      <div className="mt-6 h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-orange-500 to-green-500"
          style={{ width }}
        />
      </div>
    </div>
  );
}
