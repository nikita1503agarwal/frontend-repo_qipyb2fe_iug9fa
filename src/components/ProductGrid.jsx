import { Star } from "lucide-react";

const products = [
  {
    id: 1,
    name: "AirPro Max Wireless Headphones",
    price: 479,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=1200&auto=format&fit=crop",
    url: "https://www.amazon.com/s?k=wireless+headphones",
    tag: "Editor's Pick",
  },
  {
    id: 2,
    name: "Studio ANC Over‑Ear",
    price: 299,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1518442962835-8bfcfce34a4f?q=80&w=1200&auto=format&fit=crop",
    url: "https://www.amazon.com/s?k=over+ear+headphones+anc",
    tag: "Trending",
  },
  {
    id: 3,
    name: "SoundCore Earbuds Pro",
    price: 129,
    rating: 4.4,
    image:
      "https://images.unsplash.com/photo-1585386959984-a41552231683?q=80&w=1200&auto=format&fit=crop",
    url: "https://www.amazon.com/s?k=wireless+earbuds",
    tag: "Best Value",
  },
  {
    id: 4,
    name: "Mini Bluetooth Speaker",
    price: 69,
    rating: 4.3,
    image:
      "https://images.unsplash.com/photo-1544273677-c4331360216a?q=80&w=1200&auto=format&fit=crop",
    url: "https://www.amazon.com/s?k=bluetooth+speaker",
    tag: "Gift Idea",
  },
];

function ProductCard({ product }) {
  return (
    <a
      href={product.url}
      target="_blank"
      rel="noreferrer"
      className="group rounded-2xl overflow-hidden bg-white ring-1 ring-black/5 hover:shadow-xl transition block"
    >
      <div className="aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover group-hover:scale-105 transition"
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h3 className="font-medium leading-tight line-clamp-1">{product.name}</h3>
          <span className="text-sm rounded-full bg-gray-100 px-2 py-0.5">{product.tag}</span>
        </div>
        <div className="mt-2 flex items-center justify-between">
          <div className="flex items-center gap-1 text-amber-500">
            <Star className="h-4 w-4 fill-current" />
            <span className="text-sm font-medium">{product.rating}</span>
          </div>
          <div className="font-semibold">${product.price}</div>
        </div>
        <p className="mt-3 text-sm text-gray-600">
          Affiliate link — we may earn a commission at no extra cost to you.
        </p>
      </div>
    </a>
  );
}

export default function ProductGrid() {
  return (
    <section id="trending" className="py-14 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Trending Picks</h2>
            <p className="text-gray-600 mt-1">Hand‑selected audio gear, updated weekly.</p>
          </div>
          <a href="#categories" className="text-sm font-medium hover:underline">
            Explore categories
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
