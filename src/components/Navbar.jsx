import { ShoppingBag, Search } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-black text-white grid place-items-center font-bold">
            AF
          </div>
          <span className="font-semibold tracking-tight text-lg">Affinity</span>
        </div>

        <div className="hidden md:flex items-center gap-2">
          <div className="relative w-72">
            <input
              type="text"
              placeholder="Search headphones, earbuds, speakers..."
              className="w-full pl-10 pr-3 py-2 rounded-xl bg-gray-100 focus:bg-white border border-transparent focus:border-gray-300 outline-none transition"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
          </div>
        </div>

        <button className="inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium bg-black text-white hover:bg-gray-900 transition">
          <ShoppingBag className="h-4 w-4" />
          Shop Deals
        </button>
      </div>
    </header>
  );
}
