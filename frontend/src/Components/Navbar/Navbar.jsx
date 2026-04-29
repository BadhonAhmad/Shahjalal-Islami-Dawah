import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../Assets/Manaratus_Sunna_icon.png.png";
import nav_bar_icon from "../Assets/nav_bar_icon.png";

const Navbar = () => {
  const [activeMenuItem, setActiveMenuItem] = useState("home");
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);
  const navbarRef = useRef(null);
  const navigate = useNavigate();

  const handleDonateClick = () => {
    setIsNavbarVisible(false);
    navigate("/", { replace: false });
    setTimeout(() => {
      const el = document.getElementById("donate-section");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  const handleMenuItemClick = (menuItem) => {
    setActiveMenuItem(menuItem);
    setIsNavbarVisible(false);
  };

  const toggleNavbar = () => {
    setIsNavbarVisible(!isNavbarVisible);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isNavbarVisible && navbarRef.current && !navbarRef.current.contains(event.target)) {
        setIsNavbarVisible(false);
      }
    };

    if (isNavbarVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isNavbarVisible]);

  const menuItems = [
    { key: "home", label: "হোম", to: "/" },
    { key: "activities", label: "আমাদের কার্যক্রম", to: "/activities" },
    { key: "membership", label: "সদস্য হন", to: "/membership" },
    { key: "gellary", label: "গ্যালারি", to: "/gallery" },
    { key: "video", label: "ভিডিও", to: "/video" },
  ];

  return (
    <>
      {isNavbarVisible && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsNavbarVisible(false)}
        />
      )}
      <nav className="sticky top-0 z-50 bg-gradient-to-r from-emerald-900 via-emerald-800 to-emerald-900 shadow-lg">
        {/* Subtle top accent line */}
        <div className="h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top row: logo + donate button */}
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-4">
              <div className="relative group">
                <div className="absolute -inset-1 bg-amber-400/30 rounded-full blur-md group-hover:bg-amber-400/50 transition-all duration-500" />
                <div className="relative h-14 w-14 rounded-full bg-gradient-to-br from-white/20 to-white/5 p-[2px] shadow-lg">
                  <img src={logo} alt="Logo" className="h-full w-full rounded-full object-cover" />
                </div>
              </div>
              <div>
                <p className="text-xl md:text-2xl font-bold text-white leading-tight tracking-wide">
                  শাহজালাল ইসলামী দাওয়াহ সেন্টার
                </p>
                <p className="text-xs md:text-sm text-emerald-300/80 font-medium">
                  সিলেট বিভাগীয় নওমুসলিম মারকায
                </p>
              </div>
            </div>

            {/* Desktop donate button with pulse animation */}
            <div className="hidden md:flex items-center gap-3">
              <button onClick={handleDonateClick} className="group relative">
                <span className="absolute -inset-0.5 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full blur opacity-60 group-hover:opacity-100 group-hover:-inset-1 transition-all duration-300 animate-pulse" />
                <span className="relative block px-7 py-2.5 bg-gradient-to-r from-amber-500 to-amber-600 group-hover:from-amber-400 group-hover:to-amber-500 text-white rounded-full font-bold transition-all duration-300 shadow-lg group-hover:shadow-amber-500/30 group-hover:shadow-xl text-base">
                  দান করুন
                </span>
              </button>
            </div>

            <button
              className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
              onClick={toggleNavbar}
            >
              <img src={nav_bar_icon} alt="Menu" className="h-8 w-8 brightness-0 invert" />
            </button>
          </div>

          {/* Desktop nav links - centered with animated underlines */}
          <div className="hidden md:block border-t border-white/10">
            <ul className="flex items-center justify-center gap-1 py-1">
              {menuItems.map((item) => (
                <li key={item.key}>
                  <Link
                    to={item.to}
                    onClick={() => handleMenuItemClick(item.key)}
                    className="relative px-5 py-3 rounded-lg text-sm font-medium transition-all duration-300 inline-block group"
                  >
                    <span
                      className={`relative z-10 transition-colors duration-300 ${
                        activeMenuItem === item.key
                          ? "text-white"
                          : "text-emerald-300/80 group-hover:text-white"
                      }`}
                    >
                      {item.label}
                    </span>
                    {/* Animated background pill */}
                    <span
                      className={`absolute inset-0 rounded-lg transition-all duration-300 ${
                        activeMenuItem === item.key
                          ? "bg-white/15 scale-100"
                          : "bg-white/0 scale-95 group-hover:bg-white/10 group-hover:scale-100"
                      }`}
                    />
                    {/* Bottom glow indicator */}
                    <span
                      className={`absolute bottom-0.5 left-1/2 -translate-x-1/2 h-[2px] rounded-full transition-all duration-300 ${
                        activeMenuItem === item.key
                          ? "w-6 bg-amber-400"
                          : "w-0 bg-amber-400 group-hover:w-4"
                      }`}
                    />
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="#contact-page"
                  onClick={() => handleMenuItemClick("jogajog")}
                  className="relative px-5 py-3 rounded-lg text-sm font-medium transition-all duration-300 inline-block group"
                >
                  <span
                    className={`relative z-10 transition-colors duration-300 ${
                      activeMenuItem === "jogajog"
                        ? "text-white"
                        : "text-emerald-300/80 group-hover:text-white"
                    }`}
                  >
                    যোগাযোগ
                  </span>
                  <span
                    className={`absolute inset-0 rounded-lg transition-all duration-300 ${
                      activeMenuItem === "jogajog"
                        ? "bg-white/15 scale-100"
                        : "bg-white/0 scale-95 group-hover:bg-white/10 group-hover:scale-100"
                    }`}
                  />
                  <span
                    className={`absolute bottom-0.5 left-1/2 -translate-x-1/2 h-[2px] rounded-full transition-all duration-300 ${
                      activeMenuItem === "jogajog"
                        ? "w-6 bg-amber-400"
                        : "w-0 bg-amber-400 group-hover:w-4"
                    }`}
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Mobile drawer */}
        <div
          ref={navbarRef}
          className={`fixed top-0 left-0 h-full w-80 bg-gradient-to-b from-emerald-900 via-emerald-900 to-emerald-950 shadow-2xl z-50 transform transition-all duration-300 ease-in-out md:hidden ${
            isNavbarVisible ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Drawer accent line */}
          <div className="h-[2px] bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400" />

          <div className="p-6">
            <div className="flex items-center gap-3 mb-10 pb-6 border-b border-white/10">
              <div className="relative">
                <div className="absolute -inset-1 bg-amber-400/20 rounded-full blur" />
                <img src={logo} alt="Logo" className="relative h-12 w-12 rounded-full ring-2 ring-amber-400/40" />
              </div>
              <div>
                <p className="font-bold text-white text-lg">শাহজালাল ইসলামী দাওয়াহ সেন্টার</p>
                <p className="text-xs text-emerald-400/70">সিলেট বিভাগীয় নওমুসলিম মারকায</p>
              </div>
            </div>

            <ul className="flex flex-col gap-1">
              {menuItems.map((item) => (
                <li key={item.key}>
                  <Link
                    to={item.to}
                    className={`relative flex items-center gap-3 px-4 py-3.5 rounded-xl text-base font-medium transition-all duration-300 overflow-hidden group ${
                      activeMenuItem === item.key
                        ? "text-white"
                        : "text-emerald-200 hover:text-white"
                    }`}
                    onClick={() => handleMenuItemClick(item.key)}
                  >
                    {/* Hover / active bg */}
                    <span
                      className={`absolute inset-0 rounded-xl transition-all duration-300 ${
                        activeMenuItem === item.key
                          ? "bg-white/15"
                          : "bg-transparent group-hover:bg-white/8"
                      }`}
                    />
                    {/* Left accent bar */}
                    <span
                      className={`absolute left-0 top-2 bottom-2 w-[3px] rounded-full transition-all duration-300 ${
                        activeMenuItem === item.key
                          ? "bg-amber-400"
                          : "bg-transparent group-hover:bg-emerald-400"
                      }`}
                    />
                    <span className="relative z-10">{item.label}</span>
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="#contact-page"
                  className={`relative flex items-center gap-3 px-4 py-3.5 rounded-xl text-base font-medium transition-all duration-300 overflow-hidden group ${
                    activeMenuItem === "jogajog"
                      ? "text-white"
                      : "text-emerald-200 hover:text-white"
                  }`}
                  onClick={() => handleMenuItemClick("jogajog")}
                >
                  <span
                    className={`absolute inset-0 rounded-xl transition-all duration-300 ${
                      activeMenuItem === "jogajog"
                        ? "bg-white/15"
                        : "bg-transparent group-hover:bg-white/8"
                    }`}
                  />
                  <span
                    className={`absolute left-0 top-2 bottom-2 w-[3px] rounded-full transition-all duration-300 ${
                      activeMenuItem === "jogajog"
                        ? "bg-amber-400"
                        : "bg-transparent group-hover:bg-emerald-400"
                    }`}
                  />
                  <span className="relative z-10">যোগাযোগ</span>
                </a>
              </li>
            </ul>

            {/* Mobile donate button */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <div className="group relative block">
                <span className="absolute -inset-0.5 bg-gradient-to-r from-amber-400 to-amber-600 rounded-xl blur opacity-50 group-hover:opacity-80 transition-all duration-300" />
                <button
                  className="relative w-full px-5 py-4 bg-gradient-to-r from-amber-500 to-amber-600 group-hover:from-amber-400 group-hover:to-amber-500 text-white rounded-xl font-bold transition-all duration-300 text-center"
                  onClick={handleDonateClick}
                >
                  দান করুন
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
