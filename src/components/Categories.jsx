import { Headphones, Radio, Mic2, Waves } from "lucide-react";

const categories = [
  { name: "Headphones", icon: Headphones },
  { name: "Speakers", icon: Radio },
  { name: "Microphones", icon: Mic2 },
  { name: "Accessories", icon: Waves },
];

export default function Categories() {
  return (
    <section id="categories" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Shop by category</h2>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {categories.map((c) => (
            <a
              key={c.name}
              href="#trending"
              className="group rounded-2xl ring-1 ring-black/5 bg-white p-5 hover:shadow-lg transition flex flex-col items-start gap-4"
            >
              <div className="h-12 w-12 rounded-xl bg-gray-100 grid place-items-center group-hover:bg-gray-200 transition">
                <c.icon className="h-6 w-6" />
              </div>
              <div className="font-medium">{c.name}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
