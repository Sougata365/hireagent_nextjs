"use client";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { useRouter } from "next/navigation";

const NavBar = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Only run client-side code after component is mounted
    if (typeof window !== "undefined") {
      const authToken = localStorage.getItem("authToken");
      setIsLoggedIn(!!authToken);

      const handleScroll = () => {
        setIsScrolled(window.scrollY > 20);
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  // Don't render anything until after hydration
  if (!mounted) {
    return null; // Return null on server-side
  }

  const handleLogout = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("authToken");
      localStorage.removeItem("userProfile");
      setIsLoggedIn(false);
      router.push("/login");
    }
  };

  const handleLogin = () => {
    router.push("/login");
  };

  const navigationItems = [
    { name: "Home", path: "/" },
    {
      name: "Assistants",
      path: "/assistants",
      submenu: [
        { name: "Browse All", path: "/" },
        { name: "Featured", path: "/assistants" },
      ],
    },
    { name: "Pricing", path: "/pricing" },
    { name: "Blogs", path: "/blogs" },
  ];

  // Determine background color based on scroll position and mounted state
  const navBackground =
    mounted && isScrolled ? "bg-white shadow-lg" : "bg-transparent";

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${navBackground}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 transition-transform hover:scale-105">
            <img src="/logo.png" alt="logo" className="w-auto h-12" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.path} className="relative group">
                <a
                  href={item.path}
                  className={`flex items-center space-x-1 ${
                    isScrolled ? "text-indigo-600" : "text-indigo-600"
                  } hover:text-indigo-600 text-sm font-medium transition-colors duration-200`}
                >
                  <span>{item.name}</span>
                  {item.submenu && <ChevronDown className="h-4 w-4" />}
                </a>

                {item.submenu && (
                  <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="py-1">
                      {item.submenu.map((subItem) => (
                        <a
                          key={subItem.path}
                          href={subItem.path}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-500"
                        >
                          {subItem.name}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                className="px-6 py-2.5 bg-white text-red-500 text-sm font-medium rounded-full hover:bg-red-50 transition-all duration-200 shadow-md hover:shadow-lg"
              >
                Logout
              </button>
            ) : (
              <button
                onClick={handleLogin}
                className="px-6 py-2.5 bg-indigo-500 text-white text-sm font-medium rounded-full hover:bg-indigo-600 transition-all duration-200 shadow-md hover:shadow-lg"
              >
                Login
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-full ${
                isScrolled ? "text-gray-800" : "text-white"
              } hover:bg-indigo-50 focus:outline-none transition-colors duration-200`}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-xl">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigationItems.map((item) => (
              <div key={item.path}>
                <a
                  href={item.path}
                  className="block px-4 py-3 text-gray-800 hover:bg-indigo-50 hover:text-indigo-500 rounded-lg text-base font-medium transition-colors duration-200"
                >
                  {item.name}
                </a>
                {item.submenu && (
                  <div className="pl-6 space-y-1">
                    {item.submenu.map((subItem) => (
                      <a
                        key={subItem.path}
                        href={subItem.path}
                        className="block px-4 py-2 text-gray-600 hover:bg-indigo-50 hover:text-indigo-500 rounded-lg text-sm transition-colors duration-200"
                      >
                        {subItem.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                className="block w-full text-center px-4 py-3 text-red-500 hover:bg-red-50 rounded-lg text-base font-medium transition-colors duration-200"
              >
                Logout
              </button>
            ) : (
              <button
                onClick={handleLogin}
                className="block w-full text-center px-4 py-3 bg-indigo-500 text-white hover:bg-indigo-600 rounded-lg text-base font-medium transition-colors duration-200"
              >
                Login
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
