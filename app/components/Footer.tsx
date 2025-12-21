export default function Footer() {
  return (
    <footer className="py-8 bg-black border-t border-gray-800 text-gray-400">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm">
            © {new Date().getFullYear()} Yaser. All rights reserved.
          </p>
          <p className="text-sm">
            Built with{" "}
            <span className="text-red-500">❤</span> using Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
