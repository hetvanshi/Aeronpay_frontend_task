"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

export default function UnifiedAPI() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeLanguage, setActiveLanguage] = useState("javascript");
  const [hoveredLanguage, setHoveredLanguage] = useState(null);

  const languages = [
    {
      id: "javascript",
      name: "JavaScript",
      icon: "🟨",
      color: "from-purple-400 to-indigo-500",
      bgColor: "bg-purple-500",
    },
    {
      id: "python",
      name: "Python",
      icon: "🐍",
      color: "from-emerald-400 to-green-500",
      bgColor: "bg-emerald-500",
    },
    {
      id: "php",
      name: "PHP",
      icon: "🐘",
      color: "from-blue-400 to-cyan-500",
      bgColor: "bg-blue-500",
    },
    {
      id: "java",
      name: "Java",
      icon: "☕",
      color: "from-red-400 to-orange-500",
      bgColor: "bg-red-500",
    },
    {
      id: "ruby",
      name: "Ruby",
      icon: "💎",
      color: "from-pink-400 to-rose-500",
      bgColor: "bg-pink-500",
    },
    {
      id: "node",
      name: "Node.js",
      icon: "🟢",
      color: "from-lime-400 to-green-500",
      bgColor: "bg-lime-500",
    },
    {
      id: "csharp",
      name: "C#",
      color: "from-violet-400 to-purple-500",
      bgColor: "bg-violet-500",
    },
    {
      id: "go",
      name: "Go",
      color: "from-cyan-400 to-teal-500",
      bgColor: "bg-cyan-500",
    },
  ];

  const codeSamples = {
    javascript: `// Initialize AeronPay SDK
const aeronpay = new AeronPay({
  apiKey: 'your_api_key',
  environment: 'production'
});

// Create payment
const payment = await aeronpay.payments.create({
  amount: 1000,
  currency: 'INR',
  customer: {
    email: 'customer@example.com'
  }
});`,
    python: `# Initialize AeronPay SDK
import aeronpay

aeronpay.api_key = 'your_api_key'
aeronpay.environment = 'production'

# Create payment
payment = aeronpay.Payment.create(
  amount=1000,
  currency='INR',
  customer={
    'email': 'customer@example.com'
  }
)`,
    php: `<?php
// Initialize AeronPay SDK
\\AeronPay\\AeronPay::setApiKey('your_api_key');
\\AeronPay\\AeronPay::setEnvironment('production');

// Create payment
$payment = \\AeronPay\\Payment::create([
  'amount' => 1000,
  'currency' => 'INR',
  'customer' => [
    'email' => 'customer@example.com'
  ]
]);
?>`,
    java: `// Initialize AeronPay SDK
AeronPay aeronpay = new AeronPay.Builder()
    .setApiKey("your_api_key")
    .setEnvironment("production")
    .build();

// Create payment
PaymentCreateParams params = PaymentCreateParams.builder()
    .setAmount(1000L)
    .setCurrency("INR")
    .setCustomer(
        Customer.builder()
            .setEmail("customer@example.com")
            .build()
    )
    .build();

Payment payment = aeronpay.payments().create(params);`,
    ruby: `# Initialize AeronPay SDK
require 'aeronpay'

AeronPay.api_key = 'your_api_key'
AeronPay.environment = 'production'

# Create payment
payment = AeronPay::Payment.create(
  amount: 1000,
  currency: 'INR',
  customer: {
    email: 'customer@example.com'
  }
)`,
    node: `// Initialize AeronPay SDK
const AeronPay = require('aeronpay');
const aeronpay = new AeronPay('your_api_key', {
  environment: 'production'
});

// Create payment
const payment = await aeronpay.payments.create({
  amount: 1000,
  currency: 'INR',
  customer: {
    email: 'customer@example.com'
  }
});`,
    csharp: `// Initialize AeronPay SDK
using AeronPay;

var aeronpay = new AeronPayClient("your_api_key");
aeronpay.Environment = Environment.Production;

// Create payment
var payment = await aeronpay.Payments.CreateAsync(new PaymentCreateOptions
{
    Amount = 1000,
    Currency = "INR",
    Customer = new CustomerOptions
    {
        Email = "customer@example.com"
    }
});`,
    go: `// Initialize AeronPay SDK
package main

import "github.com/aeronpay/aeronpay-go"

func main() {
    client := aeronpay.NewClient("your_api_key")
    client.Environment = "production"
    
    // Create payment
    payment, err := client.Payments.Create(&aeronpay.PaymentParams{
        Amount:   1000,
        Currency: "INR",
        Customer: &aeronpay.CustomerParams{
            Email: "customer@example.com",
        },
    })
}`,
  };

  const floatingElements = [
    { symbol: "{ }", x: "10vw", y: "10vh" },
    { symbol: "< />", x: "85vw", y: "15vh" },
    { symbol: "();", x: "15vw", y: "45vh" },
    { symbol: "=>", x: "45vw", y: "95vh" },
    { symbol: "import", x: "5vw", y: "5vh" },
    { symbol: "def", x: "50vw", y: "10vh" },
    { symbol: "class", x: "10vw", y: "90vh" },
    { symbol: "func", x: "40vw", y: "85vh" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const languageButtonVariants = {
    normal: { scale: 1, y: 0 },
    hover: { scale: 1.1, y: -4 },
    active: { scale: 1.05, y: -2 },
  };

  return (
    <section
      ref={ref}
      className="py-28 bg-gradient-to-br from-slate-50 via-white to-purple-50 relative overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-200/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-indigo-200/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-200/20 rounded-full blur-2xl"></div>
      </div>

      <div className="absolute inset-0 pointer-events-none">
        {floatingElements.map((element, i) => (
          <motion.div
            key={i}
            className="absolute text-purple-200/30 font-mono text-lg"
            style={{
              left: element.x,
              top: element.y,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 8 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut",
            }}
          >
            {element.symbol}
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - API Code Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Code Editor */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden"
            >
              {/* Editor Header */}
              <div className="bg-slate-800 px-6 py-3 border-b border-slate-700">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    </div>
                    <div className="text-slate-300 text-sm font-mono ml-3">
                      payment_example.
                      {languages
                        .find((l) => l.id === activeLanguage)
                        ?.name.toLowerCase()}
                    </div>
                  </div>
                  <div
                    className={`w-3 h-3 rounded-full ${
                      languages.find((l) => l.id === activeLanguage)?.bgColor
                    }`}
                  ></div>
                </div>
              </div>

              {/* Code Content */}
              <div className="p-6 bg-slate-900">
                <pre className="text-slate-200 text-sm leading-relaxed font-mono overflow-x-auto">
                  <code>{codeSamples[activeLanguage]}</code>
                </pre>
              </div>

              {/* Editor Footer */}
              <div className="bg-slate-800 px-6 py-2 border-t border-slate-700">
                <div className="flex justify-between items-center text-slate-400 text-xs">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                      <span>
                        {languages.find((l) => l.id === activeLanguage)?.name}
                      </span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                      <span>Ready</span>
                    </div>
                  </div>
                  <div className="text-slate-500">AeronPay SDK</div>
                </div>
              </div>
            </motion.div>

            {/* Floating Elements */}
            <div className="absolute -bottom-3 -left-3 w-6 h-6 bg-purple-200 rounded-full"></div>
            <div className="absolute -top-3 -right-3 w-8 h-8 bg-indigo-200 rounded-full"></div>
          </motion.div>

          {/* Right - Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-8"
          >
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium mb-6">
                🔧 Unified Platform
              </div>
              <h2 className="text-5xl md:text-6xl font-bold mb-6 text-slate-800">
                Unified Open API{" "}
                <span className="bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent">
                  Platform
                </span>
              </h2>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Experience the future of fintech with AeronPay's Unified Open
                API Platform—where uniformity meets scalability. One
                integration, endless possibilities.
              </p>
            </motion.div>

            {/* Language Selector Grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="grid grid-cols-4 gap-3"
            >
              {languages.map((language) => (
                <motion.button
                  key={language.id}
                  variants={itemVariants}
                  initial="normal"
                  whileHover="hover"
                  whileTap="active"
                  animate={activeLanguage === language.id ? "active" : "normal"}
                  onHoverStart={() => setHoveredLanguage(language.id)}
                  onHoverEnd={() => setHoveredLanguage(null)}
                  onClick={() => setActiveLanguage(language.id)}
                  className={`p-3 rounded-xl text-center transition-all border-2 relative overflow-hidden group ${
                    activeLanguage === language.id
                      ? `${language.color} text-white shadow-lg border-transparent`
                      : "bg-white text-slate-700 border-slate-200 hover:border-purple-300 hover:bg-purple-50"
                  }`}
                >
                  {/* Active/Hover Indicator */}
                  {(activeLanguage === language.id ||
                    hoveredLanguage === language.id) && (
                    <motion.div
                      className={`absolute inset-0 ${
                        activeLanguage === language.id
                          ? `${language.color}`
                          : "bg-purple-100"
                      }`}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    />
                  )}

                  {/* Content */}
                  <div className="relative z-10">
                    <motion.div
                      animate={{
                        scale: activeLanguage === language.id ? 1.2 : 1,
                        rotate:
                          hoveredLanguage === language.id ? [0, 10, -10, 0] : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="text-xl mb-1"
                    >
                      {language.icon}
                    </motion.div>
                    <div className="text-xs font-medium relative">
                      {language.name}
                      {activeLanguage === language.id && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-white rounded-full"
                        />
                      )}
                    </div>
                  </div>

                  {/* Pulse animation for active language */}
                  {activeLanguage === language.id && (
                    <motion.div
                      className="absolute inset-0 border-2 border-white rounded-xl"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  )}
                </motion.button>
              ))}
            </motion.div>

            {/* Language Status */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-center"
            >
              <div className="inline-flex items-center space-x-2 bg-white rounded-lg px-4 py-2 shadow-sm border border-slate-200">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-slate-600">
                  Selected:{" "}
                  <span className="font-semibold text-purple-600">
                    {languages.find((l) => l.id === activeLanguage)?.name}
                  </span>
                </span>
              </div>
            </motion.div>

            {/* Features List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="space-y-4 pt-6"
            >
              {[
                "Single integration for all payment methods",
                "Real-time webhook support",
                "Comprehensive documentation",
                "24/7 developer support",
                "Bank-grade security",
              ].map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="flex items-center space-x-3 text-slate-700 group"
                >
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className="w-2 h-2 bg-purple-500 rounded-full group-hover:bg-purple-600 transition-colors"
                  />
                  <span className="text-slate-600 group-hover:text-slate-800 transition-colors">
                    {feature}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1 }}
          className="text-center mt-16"
        >
          <div className="inline-flex flex-col sm:flex-row gap-4 bg-white rounded-2xl p-6 shadow-lg border border-slate-200">
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 30px -10px rgba(139, 92, 246, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold rounded-xl shadow-lg relative overflow-hidden group"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />
              <span className="relative z-10">View Documentation</span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-slate-300 text-slate-700 font-semibold rounded-xl hover:border-purple-500 hover:text-purple-600 transition-all relative overflow-hidden group"
            >
              <motion.div
                className="absolute inset-0 bg-purple-50"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 400 }}
              />
              <span className="relative z-10">Get API Keys</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
