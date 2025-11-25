"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: "🔍",
      title: "Scan & Pay",
      description:
        "Scan QR codes to pay instantly—no need to carry cash or cards.",
    },
    {
      icon: "🔒",
      title: "Bank-Level Security",
      description:
        "Every transaction is encrypted, ensuring your payment details remain safe.",
    },
    {
      icon: "💳",
      title: "Multiple Payment Methods",
      description:
        "Pay via any linked bank account, Debit Card, or Credit Card.",
    },
  ];

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Simplify Payments with QR
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Experience smooth and secure transactions with AeronPay's QR Payment
            feature
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{
                scale: 1.05,
                y: -10,
                transition: { duration: 0.3 },
              }}
              className="bg-gradient-to-br from-white to-slate-50 rounded-2xl p-8 shadow-lg border border-slate-100 hover:shadow-xl transition-all group"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="text-4xl mb-4 w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center group-hover:bg-primary-200 transition-colors"
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">
                {feature.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
