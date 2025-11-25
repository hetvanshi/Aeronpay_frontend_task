"use client";
import { motion } from "framer-motion";

export default function JoinHub() {
  const hubs = [
    {
      name: "WhatsApp",
      icon: "💬",
      description: "Join our WhatsApp community for instant updates",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-200",
      url: "#",
    },
    {
      name: "Social Media",
      icon: "📱",
      description: "Follow us on all social platforms",
      color: "from-blue-500 to-purple-600",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-200",
      url: "#",
    },
    {
      name: "Telegram",
      icon: "📢",
      description: "Join our Telegram channel for news",
      color: "from-sky-500 to-blue-600",
      bgColor: "bg-sky-500/10",
      borderColor: "border-sky-200",
      url: "#",
    },
    {
      name: "Company Channel",
      icon: "🏢",
      description: "Direct updates from the company",
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-500/10",
      borderColor: "border-orange-200",
      url: "#",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Join Our{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Community Hub
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Connect with us across different platforms and stay updated with the
            latest news and updates
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {hubs.map((hub, index) => (
            <motion.a
              key={hub.name}
              href={hub.url}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              className={`block p-6 rounded-2xl ${hub.bgColor} border ${hub.borderColor} backdrop-blur-sm transition-all duration-300 group hover:shadow-xl`}
            >
              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${hub.color} flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                {hub.icon}
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-gray-800 transition-colors">
                {hub.name}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {hub.description}
              </p>

              <div className="flex items-center text-sm font-semibold text-gray-700 group-hover:text-gray-900 transition-colors">
                Join Now
                <svg
                  className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-gray-500 mb-4">
            Choose your preferred platform to stay connected
          </p>
          <div className="flex justify-center space-x-4">
            <span className="text-sm text-gray-400">📱 Mobile Friendly</span>
            <span className="text-sm text-gray-400">⚡ Instant Updates</span>
            <span className="text-sm text-gray-400">🔒 Secure Channels</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
