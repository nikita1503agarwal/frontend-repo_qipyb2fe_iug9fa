import Spline from "@splinetool/react-spline";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[80vh] md:min-h-[90vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4JFCLsE5jz72cZzw/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="max-w-xl">
          <p className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur px-3 py-1 text-xs font-medium text-gray-700 ring-1 ring-black/5">
            New • Curated Tech Picks
          </p>
          <h1 className="mt-4 text-4xl md:text-6xl font-semibold tracking-tight leading-tight">
            Discover the best audio gear at the best prices
          </h1>
          <p className="mt-4 text-gray-700 text-base md:text-lg">
            Explore hand-picked headphones, earbuds, and speakers from top brands. Tap products to view details and shop via trusted partners.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a
              href="#trending"
              className="inline-flex items-center justify-center rounded-xl bg-black text-white px-5 py-3 font-medium hover:bg-gray-900 transition"
            >
              Shop Trending
            </a>
            <a
              href="#categories"
              className="inline-flex items-center justify-center rounded-xl bg-white text-gray-900 px-5 py-3 font-medium ring-1 ring-black/10 hover:bg-gray-50 transition"
            >
              Browse Categories
            </a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-white/80" />
    </section>
  );
}
