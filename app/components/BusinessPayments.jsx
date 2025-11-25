"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

export default function BusinessPayments() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      title: "Automatic Payments",
      description:
        "Streamline your payment processes with automated transaction handling",
      icon: "🤖",
      color: "from-amber-500 to-orange-500",
    },
    {
      title: "Accelerated Settlements",
      description:
        "Get faster access to your funds with quick settlement cycles",
      icon: "⚡",
      color: "from-emerald-500 to-green-500",
    },
    {
      title: "Seamless Collections",
      description:
        "Manage incoming payments efficiently with integrated collection tools",
      icon: "🔄",
      color: "from-violet-500 to-purple-500",
    },
  ];

  const qrVariants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8,
      },
    },
  };

  const featureVariants = {
    initial: { opacity: 0, x: -20 },
    animate: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
      },
    }),
  };

  return (
    <section
      ref={ref}
      className="py-28 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-amber-200/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              <div className="inline-flex items-center px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-medium mb-6">
                💼 Business Solutions
              </div>
              <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
                Simplify Payments with{" "}
                <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
                  QR Technology
                </span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Experience smooth and secure transactions with AeronPay's QR
                Payment feature. Quick, effortless way to send and receive
                payments instantly to the beneficiary.
              </p>
            </motion.div>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  custom={index}
                  variants={featureVariants}
                  initial="initial"
                  animate={isInView ? "animate" : "initial"}
                  onHoverStart={() => setActiveFeature(index)}
                  className="flex items-start space-x-4 group cursor-pointer"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-white text-lg shadow-lg flex-shrink-0`}
                  >
                    {feature.icon}
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-amber-600 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200"
            >
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="text-center">
                  <div className="text-2xl text-amber-600 mb-2">🔍</div>
                  <div className="text-sm text-gray-600">
                    Scan QR to pay instantly
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl text-amber-600 mb-2">🔒</div>
                  <div className="text-sm text-gray-600">
                    Encrypted transactions
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl text-amber-600 mb-2">💳</div>
                  <div className="text-sm text-gray-600">
                    Multiple payment methods
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center items-center"
          >
            <motion.div
              variants={qrVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              className="relative bg-white rounded-3xl p-8 shadow-2xl border border-gray-200 max-w-sm"
            >
              <div className="text-center mb-6">
                <div className="text-2xl font-bold text-gray-900 mb-2">
                  AeronPay
                </div>
                <div className="text-gray-500 text-sm">QR Payment</div>
              </div>

              <div className="bg-gray-900 p-6 rounded-2xl mb-6 relative overflow-hidden">
                <div className="grid grid-cols-7 gap-1">
                  {Array.from({ length: 49 }).map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.5 + i * 0.02 }}
                      className={`aspect-square rounded-sm ${
                        i < 7 ||
                        i >= 42 ||
                        i % 7 === 0 ||
                        i % 7 === 6 ||
                        (i >= 14 && i <= 16) ||
                        (i >= 28 && i <= 30) ||
                        (i >= 8 && i <= 10 && i % 7 >= 2 && i % 7 <= 4)
                          ? "bg-white"
                          : "bg-gray-700"
                      }`}
                    />
                  ))}
                </div>

                <motion.div
                  className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-transparent"
                  animate={{ y: ["0%", "100%", "0%"] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>

              <div className="text-center space-y-4">
                <div className="text-gray-800 font-semibold">
                  Scan QR Code to Pay
                </div>

                <div className="flex justify-center space-x-6 text-gray-600 text-sm">
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Secure</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>Instant</span>
                  </div>
                </div>
              </div>

              <div className="absolute -top-2 -right-2 w-6 h-6 bg-amber-500 rounded-full opacity-20"></div>
              <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-blue-500 rounded-full opacity-20"></div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
