"use client";
import { motion } from "framer-motion";
import { useRef } from "react";

export default function DigitalGold() {
  const containerRef = useRef(null);

  const benefits = [
    { icon: "🛡️", text: "24K Certified" },
    { icon: "⚡", text: "Instant Trade" },
    { icon: "💰", text: "Start from ₹1" },
    { icon: "🏦", text: "Secure Vaults" },
  ];

  return (
    <section className="py-28 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-10 right-20 w-64 h-64 bg-amber-200/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-20 w-80 h-80 bg-yellow-200/30 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            ref={containerRef}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center"
          >
            <div className="relative">
              <div className="absolute -bottom-4 -right-4 w-80 h-52 bg-gradient-to-br from-amber-200 to-yellow-200 rounded-2xl shadow-xl"></div>

              <motion.div
                whileHover={{ y: -10, rotate: 2 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative w-80 h-52 bg-gradient-to-br from-amber-500 via-yellow-500 to-orange-500 rounded-2xl shadow-2xl overflow-hidden border-4 border-white"
              >
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-0 left-0 w-full h-1 bg-yellow-300"></div>
                  <div className="absolute top-4 left-0 w-full h-1 bg-amber-300"></div>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-orange-300"></div>
                </div>

                <div className="relative z-10 p-6 h-full flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <div className="text-amber-900">
                      <div className="text-lg font-bold">Digital Gold</div>
                      <div className="text-amber-800 text-sm">
                        24K Pure Gold
                      </div>
                    </div>
                    <div className="w-10 h-10 bg-gradient-to-br from-yellow-100 to-amber-100 rounded-full flex items-center justify-center border-2 border-amber-300">
                      <span className="text-amber-700 text-lg">🥇</span>
                    </div>
                  </div>

                  <div className="flex justify-center my-2">
                    <div className="w-32 h-8 bg-gradient-to-r from-yellow-300 via-amber-300 to-yellow-400 rounded-lg border-2 border-amber-400 shadow-inner flex items-center justify-center">
                      <span className="text-amber-900 text-xs font-bold">
                        24K GOLD
                      </span>
                    </div>
                  </div>

                  <div className="flex justify-between items-end">
                    <div className="text-amber-900">
                      <div className="text-xs text-amber-700">
                        CURRENT HOLDINGS
                      </div>
                      <div className="font-mono font-bold">5.25 grams</div>
                    </div>
                    <div className="text-amber-900">
                      <div className="text-xs text-amber-700">LIVE VALUE</div>
                      <div className="font-mono font-bold">₹32,450</div>
                    </div>
                  </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-100/30 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              </motion.div>
            </div>

            <motion.div
              className="absolute -top-4 -left-4"
              animate={{
                y: [0, -20, 0],
                rotate: [0, 360],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                delay: 0.5,
              }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full border-4 border-amber-300 shadow-lg flex items-center justify-center">
                <span className="text-amber-900 font-bold text-sm">1g</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-medium mb-6">
                🥇 Smart Investment
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-800">
                Digital
                <span className="block text-amber-600">Gold</span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Invest in 24K pure digital gold with complete safety. Start with
                just ₹1 and build your wealth with real-time pricing and insured
                vault storage.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.text}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.4 }}
                  whileHover={{ scale: 1.05 }}
                  className="p-4 rounded-xl bg-white border border-amber-200 shadow-sm hover:shadow-md hover:border-amber-300 transition-all"
                >
                  <div className="text-2xl mb-2 text-amber-600">
                    {benefit.icon}
                  </div>
                  <p className="text-slate-700 font-medium text-sm">
                    {benefit.text}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 30px -10px rgb(245 158 11 / 0.5)",
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-amber-500 text-white font-semibold rounded-xl shadow-lg transition-all"
            >
              Start Investing
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
