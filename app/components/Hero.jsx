"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import FloatingIcons from "./FloatingIcons";

export default function Hero() {
  const [currentFeature, setCurrentFeature] = useState(0);

  const features = [
    "payments",
    "UPI transfers",
    "QR-based checkout",
    "secure payouts",
  ];

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentFeature((p) => (p + 1) % features.length);
    }, 2500);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="pt-44 relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#05070A]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(122,56,255,0.25),transparent_60%)]"></div>

      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute left-1/2 top-1/3 w-[120%] h-[2px] bg-gradient-to-r from-transparent via-pink-500 to-transparent blur-md"></div>
        <div className="absolute left-1/3 top-1/2 h-[120%] w-[2px] bg-gradient-to-b from-transparent via-blue-500 to-transparent blur-md"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight"
        >
          Payments Designed
          <span className="block bg-gradient-to-r from-blue-400 to-pink-500 text-transparent bg-clip-text">
            for Business Growth
          </span>
        </motion.h1>

        <motion.p
          key={currentFeature}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xl md:text-2xl text-gray-300 mb-6"
        >
          Experience smooth & secure {features[currentFeature]}
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-gray-400 max-w-2xl mx-auto text-lg mb-10"
        >
          Powerful API-driven payments infrastructure built for fast, secure and
          transparent transactions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex gap-4 justify-center"
        >
          <button className="px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg shadow-lg hover:shadow-blue-500/40 transition">
            Get Started
          </button>

          <button className="px-8 py-4 rounded-full border border-gray-500 text-gray-300 hover:border-blue-400 hover:text-blue-400 transition font-semibold text-lg">
            View API Docs
          </button>
        </motion.div>
      </div>

      <FloatingIcons />
    </section>
  );
}
