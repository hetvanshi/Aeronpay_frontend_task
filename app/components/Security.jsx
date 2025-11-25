"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export default function Security() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeFeature, setActiveFeature] = useState(null);

  const [iconPositions, setIconPositions] = useState([]);

  useEffect(() => {
    setIconPositions(
      new Array(5).fill(0).map(() => ({
        x: Math.random() * 100 + "vw",
        y: Math.random() * 100 + "vh",
        delay: Math.random() * 2,
        duration: 8 + Math.random() * 4,
      }))
    );
  }, []);

  const floatingIcons = ["🔐", "🛡️", "🔒", "💳", "🌐"];

  const securityFeatures = [
    {
      icon: "🔒",
      title: "Enterprise-Grade Encryption",
      shortDesc: "Bank-level security for all transactions",
      fullDesc:
        "Protect every transaction with enterprise-grade encryption and advanced fraud prevention, ensuring maximum security, reliability, and complete peace of mind.",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
    },
    {
      icon: "🛡️",
      title: "Advanced Fraud Prevention",
      shortDesc: "Real-time monitoring and protection",
      fullDesc:
        "Advanced AI-powered fraud detection systems monitor transactions 24/7, providing real-time protection against suspicious activities and unauthorized access.",
      color: "from-emerald-500 to-green-500",
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-200",
    },
    {
      icon: "🌐",
      title: "Multi-Bank Compatibility",
      shortDesc: "Works seamlessly with all major banks",
      fullDesc:
        "Connect and transact with any major bank instantly. Our platform ensures seamless integration and compatibility across all banking partners.",
      color: "from-purple-500 to-violet-500",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
    },
    {
      icon: "⏰",
      title: "24/7 Availability",
      shortDesc: "Round-the-clock service and support",
      fullDesc:
        "Never worry about downtime. Our services are available 24/7 with dedicated support teams ready to assist you anytime, anywhere.",
      color: "from-amber-500 to-orange-500",
      bgColor: "bg-amber-50",
      borderColor: "border-amber-200",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  const detailVariants = {
    hidden: { opacity: 0, height: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      height: "auto",
      scale: 1,
      transition: { type: "spring", stiffness: 200, damping: 25 },
    },
  };

  return (
    <section
      ref={ref}
      className="py-28 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        {iconPositions.length > 0 &&
          floatingIcons.map((icon, i) => (
            <motion.div
              key={i}
              className="absolute text-2xl opacity-10"
              initial={{ x: iconPositions[i].x, y: iconPositions[i].y }}
              animate={{
                y: [0, -30, 0],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: iconPositions[i].duration,
                repeat: Infinity,
                delay: iconPositions[i].delay,
              }}
            >
              {icon}
            </motion.div>
          ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full text-slate-700 text-lg font-medium mb-6 shadow-lg border border-slate-200"
          >
            🛡️ Enterprise Security
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-slate-800">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              AeronPay?
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Robust security and reliability for complete peace of mind.
            Enterprise-grade protection for every transaction.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto"
        >
          {securityFeatures.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative group cursor-pointer"
              onHoverStart={() => setActiveFeature(index)}
              onHoverEnd={() => setActiveFeature(null)}
            >
              <motion.div
                whileHover={{
                  y: -8,
                  transition: { type: "spring", stiffness: 300, damping: 25 },
                }}
                className={`relative rounded-3xl p-8 border-2 transition-all duration-300 ${
                  activeFeature === index
                    ? `${feature.bgColor} ${feature.borderColor} shadow-2xl scale-105`
                    : "bg-white border-slate-200 shadow-lg hover:shadow-xl"
                }`}
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-white text-3xl shadow-lg mb-6`}
                >
                  {feature.icon}
                </motion.div>

                <h3
                  className={`text-2xl font-bold mb-4 transition-colors ${
                    activeFeature === index
                      ? "text-slate-800"
                      : "text-slate-700"
                  }`}
                >
                  {feature.title}
                </h3>

                <p className="text-slate-600 mb-4 leading-relaxed">
                  {feature.shortDesc}
                </p>

                <AnimatePresence>
                  {activeFeature === index && (
                    <motion.div
                      variants={detailVariants}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      className="overflow-hidden"
                    >
                      <div className="pt-4 border-t border-slate-200">
                        <p className="text-slate-700 leading-relaxed text-lg">
                          {feature.fullDesc}
                        </p>

                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                          className="flex items-center space-x-4 mt-4 pt-4 border-t border-slate-200"
                        >
                          <div className="flex items-center space-x-2 text-sm text-slate-600">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span>Always Active</span>
                          </div>
                          <div className="flex items-center space-x-2 text-sm text-slate-600">
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            <span>Real-time</span>
                          </div>
                        </motion.div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <motion.div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.color} rounded-b-3xl`}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: activeFeature === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>

              <div
                className={`absolute -inset-4 bg-gradient-to-br ${feature.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 -z-10`}
              ></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Security Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 1, type: "spring", stiffness: 100 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center space-x-4 bg-white/80 backdrop-blur-sm rounded-2xl px-8 py-4 shadow-lg border border-slate-200">
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0],
              }}
              transition={{ duration: 4, repeat: Infinity }}
              className="text-3xl"
            >
              ✅
            </motion.div>
            <div className="text-left">
              <div className="font-semibold text-slate-800">
                Maximum Security Guarantee
              </div>
              <div className="text-slate-600 text-sm">
                Enterprise-grade protection for complete peace of mind
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
