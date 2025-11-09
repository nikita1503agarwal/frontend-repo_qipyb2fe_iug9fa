export default function Footer() {
  return (
    <footer className="py-10 border-t border-black/5 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} Affinity — Curated audio tech picks.
          </p>
          <p className="text-sm text-gray-500">
            This site uses affiliate links. We may earn a commission when you buy through links on our site.
          </p>
        </div>
      </div>
    </footer>
  );
}
