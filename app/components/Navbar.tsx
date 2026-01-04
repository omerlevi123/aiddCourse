import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left side: Logo and branding */}
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 bg-gradient-to-br from-blue-400 to-teal-500">
              <Image
                src="/omer-photo.jpeg"
                alt="Omer Levi"
                width={40}
                height={40}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="font-bold text-black text-lg">OMER LEVI</span>
          </Link>

          {/* Right side: Navigation links */}
          <div className="flex items-center gap-6 sm:gap-8">
            <a
              href="/"
              className="text-gray-600 hover:text-gray-900 transition-colors text-sm sm:text-base"
            >
              Home
            </a>
            <a
              href="/about"
              className="text-gray-600 hover:text-gray-900 transition-colors text-sm sm:text-base"
            >
              About
            </a>
            <a
              href="/life"
              className="text-gray-600 hover:text-gray-900 transition-colors text-sm sm:text-base"
            >
              Life
            </a>
            <a
              href="/writing"
              className="text-gray-600 hover:text-gray-900 transition-colors text-sm sm:text-base"
            >
              Writing
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

