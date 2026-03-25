import { Link, useLocation } from "react-router-dom";
import { Send } from "lucide-react";

const Navbar = () => {
  const pathname = useLocation().pathname;

  const NavLinks = [
    { name: "Home", path: "/" },
    { name: "Posts", path: "/posts" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-1 text-xl md:text-2xl font-bold tracking-tight group"
        >
          <span className="text-gray-700 group-hover:text-gray-900 transition">
            Postli
          </span>
          <span className="text-purple-500">fy</span>
          <Send
            size={18}
            className="text-purple-500 translate-y-0.5 group-hover:translate-x-1 transition"
          />
        </Link>

        {/* Links */}
        <ul className="flex items-center gap-4 md:gap-8">
          {NavLinks.map((link) => {
            const isActive = pathname === link.path;

            return (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className={`relative text-sm md:text-base font-medium transition ${
                    isActive
                      ? "text-purple-500"
                      : "text-gray-600 hover:text-purple-500"
                  }`}
                >
                  {link.name}

                  {/* underline animation */}
                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] bg-purple-500 transition-all ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
