"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileDropdown, setMobileDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const colorPalette = {
    primary: "#0ea5e9",
    purple: "#8b5cf6",
    pink: "#ec4899",
    amber: "#f59e0b",
    emerald: "#10b981",
    rose: "#f43f5e",
    indigo: "#6366f1",
    cyan: "#06b6d4",
  };

  const menuItems = [
    {
      name: "About",
      href: "#about",
      type: "link",
      color: colorPalette.emerald,
    },
    {
      name: "Products",
      type: "dropdown",
      color: colorPalette.purple,
      submenu: [
        {
          name: "For Customer",
          items: [
            { name: "Prepaid Card", href: "#prepaid-card", icon: "💳" },
            { name: "Digital Gold", href: "#digital-gold", icon: "🪙" },
            { name: "QR Payments", href: "#qr-payments", icon: "📱" },
            { name: "Gift Cards", href: "#gift-cards", icon: "🎁" },
          ],
        },
        {
          name: "For Merchant",
          items: [
            { name: "Utility Services", href: "#utility", icon: "⚡" },
            { name: "Rent Collection", href: "#rent-pay", icon: "🏠" },
            { name: "QR Collection", href: "#qr-collection", icon: "💰" },
            {
              name: "Business Dashboard",
              href: "#business-dashboard",
              icon: "📊",
            },
          ],
        },
        {
          name: "Developers",
          items: [
            { name: "API Documentation", href: "#api-docs", icon: "📚" },
            { name: "SDK Libraries", href: "#sdk", icon: "⚙️" },
            { name: "Webhooks", href: "#webhooks", icon: "🔔" },
            { name: "Sandbox", href: "#sandbox", icon: "🧪" },
          ],
        },
      ],
    },
    {
      name: "Career",
      href: "#career",
      type: "link",
      color: colorPalette.amber,
    },
    {
      name: "Blog",
      href: "#blog",
      type: "link",
      color: colorPalette.rose,
    },
    {
      name: "Contact Us",
      href: "#contact",
      type: "link",
      color: colorPalette.cyan,
    },
  ];

  const ArrowIcon = ({ isOpen = false }) => (
    <motion.svg
      animate={{ rotate: isOpen ? 180 : 0 }}
      transition={{ duration: 0.3 }}
      className="w-3 h-3 ml-1"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 9l-7 7-7-7"
      />
    </motion.svg>
  );

  const Logo = () => {
    const sparklePositions = [
      { x: "30%", y: "25%" },
      { x: "70%", y: "40%" },
      { x: "25%", y: "65%" },
      { x: "60%", y: "20%" },
      { x: "45%", y: "75%" },
      { x: "80%", y: "55%" },
      { x: "35%", y: "45%" },
      { x: "65%", y: "70%" },
      { x: "50%", y: "35%" },
      { x: "75%", y: "25%" },
      { x: "40%", y: "60%" },
      { x: "55%", y: "50%" },
    ];

    return (
      <motion.div
        className="relative group cursor-pointer"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="w-12 h-12 rounded-2xl shadow-2xl flex items-center justify-center relative overflow-hidden"
          animate={{
            background: [
              "linear-gradient(135deg, #0ea5e9, #8b5cf6)",
              "linear-gradient(135deg, #8b5cf6, #ec4899)",
              "linear-gradient(135deg, #ec4899, #f59e0b)",
              "linear-gradient(135deg, #f59e0b, #10b981)",
              "linear-gradient(135deg, #10b981, #0ea5e9)",
            ],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <motion.div
            className="absolute inset-0 bg-white"
            animate={{
              opacity: [0, 0.2, 0],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatDelay: 2,
            }}
          />

          <motion.span
            className="text-white font-bold text-xl z-10 relative"
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            A
          </motion.span>

          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {sparklePositions.map((position, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full"
                style={{
                  left: position.x,
                  top: position.y,
                }}
                animate={{
                  scale: [0, 1.5, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.3,
                  ease: "easeOut",
                }}
              />
            ))}
          </div>

          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent transform -skew-x-12"
            animate={{ x: ["-100%", "200%"] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: 1,
              ease: "easeInOut",
            }}
          />

          <motion.div
            className="absolute -inset-1 rounded-2xl border-2 border-transparent"
            animate={{
              boxShadow: [
                "0 0 0px rgba(14, 165, 233, 0)",
                "0 0 20px rgba(14, 165, 233, 0.8)",
                "0 0 0px rgba(14, 165, 233, 0)",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          />
        </motion.div>

        <motion.div
          className="absolute -inset-4 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          initial={false}
          animate={{
            background: [
              "radial-gradient(circle at 30% 30%, rgba(14, 165, 233, 0.2), transparent 50%)",
              "radial-gradient(circle at 70% 70%, rgba(139, 92, 246, 0.2), transparent 50%)",
              "radial-gradient(circle at 30% 70%, rgba(236, 72, 153, 0.2), transparent 50%)",
            ],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
        />

        <motion.div
          className="absolute -inset-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          initial={false}
        >
          {[...Array(5)].map((_, i) => {
            const angle = (i / 5) * Math.PI * 2;
            return (
              <motion.div
                key={i}
                className="absolute w-1.5 h-1.5 bg-white rounded-full shadow-lg"
                style={{
                  left: "50%",
                  top: "50%",
                }}
                animate={{
                  scale: [0, 2, 0],
                  opacity: [0, 1, 0],
                  x: [0, Math.cos(angle) * 45, Math.cos(angle) * 65],
                  y: [0, Math.sin(angle) * 45, Math.sin(angle) * 65],
                }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                }}
              />
            );
          })}
        </motion.div>
      </motion.div>
    );
  };

  if (!mounted) {
    return (
      <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-xl border-b border-gray-100 h-16 lg:h-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black bg-gradient-to-r from-slate-800 to-blue-600 bg-clip-text text-transparent">
                  AeronPay
                </span>
                <span className="text-xs text-gray-500">Digital Payments</span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-200"
          : "bg-white/90 backdrop-blur-md border-b border-gray-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center space-x-3"
          >
            <Logo />
            <div className="flex flex-col">
              <motion.span
                className="text-2xl font-black bg-gradient-to-r from-slate-800 to-blue-600 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ["0%", "100%", "0%"],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
                style={{
                  backgroundSize: "200% 100%",
                  backgroundImage:
                    "linear-gradient(135deg, #0f172a, #0ea5e9, #8b5cf6, #0f172a)",
                }}
              >
                AeronPay
              </motion.span>
              <motion.span
                className="text-xs text-gray-500"
                animate={{
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              >
                Digital Payments
              </motion.span>
            </div>
          </motion.div>

          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {menuItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() =>
                  item.type === "dropdown" && setActiveDropdown(item.name)
                }
                onMouseLeave={() =>
                  item.type === "dropdown" && setActiveDropdown(null)
                }
              >
                {item.type === "link" ? (
                  <motion.a
                    href={item.href}
                    className={`px-3 py-2 xl:px-4 font-medium transition-colors duration-200 ${
                      item.name === "Contact Us"
                        ? "text-cyan-600 hover:text-cyan-700 font-semibold"
                        : "text-gray-700 hover:text-blue-600"
                    }`}
                    whileHover={{ scale: 1.05 }}
                  >
                    {item.name}
                  </motion.a>
                ) : (
                  <>
                    <motion.button
                      className={`px-3 py-2 xl:px-4 font-medium flex items-center space-x-1 transition-colors duration-200 ${
                        activeDropdown === item.name
                          ? "text-blue-600"
                          : "text-gray-700 hover:text-blue-600"
                      }`}
                      whileHover={{ scale: 1.05 }}
                    >
                      <span>{item.name}</span>
                      <ArrowIcon isOpen={activeDropdown === item.name} />
                    </motion.button>

                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.3 }}
                          className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[90vw] max-w-4xl bg-white/95 backdrop-blur-xl rounded-xl shadow-xl border border-gray-200 overflow-hidden"
                        >
                          <div
                            className="p-4 text-white"
                            style={{
                              background: `linear-gradient(135deg, ${item.color}, ${colorPalette.purple})`,
                            }}
                          >
                            <div className="flex items-center space-x-2">
                              <span className="font-semibold">
                                {item.name} Solutions
                              </span>
                            </div>
                            <p className="text-white/80 text-sm mt-1">
                              Discover our comprehensive payment solutions
                            </p>
                          </div>

                          <div className="p-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                              {item.submenu?.map((subItem) => (
                                <div key={subItem.name} className="space-y-3">
                                  <div className="flex items-center space-x-2">
                                    <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center">
                                      <span className="text-blue-600 text-sm font-semibold">
                                        {subItem.name
                                          .split(" ")
                                          .map((word) => word[0])
                                          .join("")}
                                      </span>
                                    </div>
                                    <h3 className="font-semibold text-sm text-gray-800">
                                      {subItem.name}
                                    </h3>
                                  </div>

                                  <div className="space-y-1">
                                    {subItem.items.map((subSubItem) => (
                                      <motion.a
                                        key={subSubItem.name}
                                        href={subSubItem.href}
                                        className="flex items-center space-x-2 p-2 rounded-lg transition-all duration-200 hover:bg-gray-50 group"
                                        whileHover={{ x: 2 }}
                                      >
                                        <span className="text-lg">
                                          {subSubItem.icon}
                                        </span>
                                        <span className="text-sm text-gray-700 flex-1 group-hover:text-gray-900">
                                          {subSubItem.name}
                                        </span>
                                      </motion.a>
                                    ))}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                )}
              </div>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white border-t border-gray-200 overflow-hidden"
            >
              <div className="py-4 space-y-0 max-h-[80vh] overflow-y-auto">
                {menuItems.map((item) => (
                  <div
                    key={item.name}
                    className="border-b border-gray-100 last:border-b-0"
                  >
                    {item.type === "link" ? (
                      <a
                        href={item.href}
                        className={`block px-6 py-4 font-medium transition-colors ${
                          item.name === "Contact Us"
                            ? "text-cyan-600 hover:bg-cyan-50 font-semibold"
                            : "text-gray-700 hover:bg-gray-50"
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </a>
                    ) : (
                      <div className="px-6 py-4">
                        <button
                          onClick={() =>
                            setMobileDropdown(
                              mobileDropdown === item.name ? null : item.name
                            )
                          }
                          className="flex items-center justify-between w-full text-left font-medium text-gray-700 hover:text-blue-600"
                        >
                          <span>{item.name}</span>
                          <ArrowIcon isOpen={mobileDropdown === item.name} />
                        </button>

                        {/* Mobile Dropdown Content with Scroll */}
                        <AnimatePresence>
                          {mobileDropdown === item.name && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="mt-3 space-y-4 overflow-hidden"
                            >
                              <div className="max-h-[60vh] overflow-y-auto pr-2 space-y-4">
                                {item.submenu?.map((subItem) => (
                                  <div
                                    key={subItem.name}
                                    className="bg-gray-50 rounded-lg p-3"
                                  >
                                    {/* Submenu Header */}
                                    <div className="flex items-center space-x-2 mb-2">
                                      <div className="w-6 h-6 rounded-md bg-blue-100 flex items-center justify-center">
                                        <span className="text-blue-600 text-xs font-semibold">
                                          {subItem.name
                                            .split(" ")
                                            .map((word) => word[0])
                                            .join("")}
                                        </span>
                                      </div>
                                      <h3 className="font-semibold text-sm text-gray-800">
                                        {subItem.name}
                                      </h3>
                                    </div>

                                    {/* Submenu Items */}
                                    <div className="space-y-1">
                                      {subItem.items.map((subSubItem) => (
                                        <a
                                          key={subSubItem.name}
                                          href={subSubItem.href}
                                          className="flex items-center space-x-3 px-2 py-2 text-sm text-gray-600 rounded-lg hover:bg-white transition-colors"
                                          onClick={() => setIsOpen(false)}
                                        >
                                          <span className="text-base">
                                            {subSubItem.icon}
                                          </span>
                                          <span className="flex-1">
                                            {subSubItem.name}
                                          </span>
                                        </a>
                                      ))}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Mobile Menu Footer */}
              <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
                <div className="text-center">
                  <p className="text-sm text-gray-600 mb-3">
                    Ready to get started?
                  </p>
                  <a
                    href="#contact"
                    className="inline-block w-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:shadow-lg transition-all duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
