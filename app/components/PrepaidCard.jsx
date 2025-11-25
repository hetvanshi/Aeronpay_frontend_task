"use client";
import { motion } from "framer-motion";
import { useRef } from "react";

export default function PrepaidCard() {
  const containerRef = useRef(null);

  const features = [
    { icon: "⚡", text: "Instant Load" },
    { icon: "🌐", text: "Online & Offline" },
    { icon: "🔒", text: "Secure Tap & Pay" },
    { icon: "🏧", text: "ATM Withdrawals" },
  ];

  return (
    <section className="py-28 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            ref={containerRef}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
                💳 Smart Banking
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-800">
                AeronPay
                <span className="block text-blue-600">Prepaid Card</span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Experience financial freedom with our sleek prepaid card.
                Perfect for everyday spending, online shopping, and secure
                global transactions.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.text}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.4 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all group"
                >
                  <div className="text-2xl mb-2 text-blue-600">
                    {feature.icon}
                  </div>
                  <p className="text-slate-700 font-medium text-sm">
                    {feature.text}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 30px -10px rgb(59 130 246 / 0.5)",
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl shadow-lg transition-all"
            >
              Get Your Card Now
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring" }}
            className="relative flex justify-center"
          >
            <div className="relative">
              <div className="absolute -bottom-4 -right-4 w-80 h-52 bg-gradient-to-br from-slate-400 to-slate-600 rounded-2xl shadow-xl"></div>

              <motion.div
                whileHover={{ y: -10, rotate: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative w-80 h-52 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-700 rounded-2xl shadow-2xl overflow-hidden border-4 border-white"
              >
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-4 right-4 w-20 h-20 bg-white rounded-full"></div>
                  <div className="absolute bottom-4 left-4 w-16 h-16 bg-white rounded-full"></div>
                </div>

                <div className="relative z-10 p-6 h-full flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <div className="text-white">
                      <div className="text-lg font-bold">AeronPay</div>
                      <div className="text-blue-200 text-sm">Prepaid Card</div>
                    </div>
                    <div className="w-10 h-8 bg-gradient-to-r from-yellow-400 to-amber-400 rounded-md flex items-center justify-center">
                      <div className="w-6 h-4 bg-gradient-to-r from-amber-200 to-yellow-200 rounded-sm"></div>
                    </div>
                  </div>

                  <div className="text-white font-mono tracking-widest text-lg">
                    •••• •••• •••• 3456
                  </div>

                  <div className="flex justify-between items-end">
                    <div className="text-white">
                      <div className="text-xs text-blue-200">VALID THRU</div>
                      <div className="font-mono">12/28</div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="text-white text-sm">VISA</div>
                      <div className="w-8 h-8 bg-white/20 rounded-full"></div>
                    </div>
                  </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
