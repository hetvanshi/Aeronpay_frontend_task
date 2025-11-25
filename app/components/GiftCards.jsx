"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const giftCards = [
  {
    name: "Fashion",
    icon: "👗",
    value: "₹5,000",
    code: "APFC-2024",
    color: "from-pink-500 to-rose-500",
    brand: "Zara • H&M • Nike",
  },
  {
    name: "Food & Dining",
    icon: "🍔",
    value: "₹2,500",
    code: "APFD-2024",
    color: "from-orange-500 to-red-500",
    brand: "Starbucks • McDonald's",
  },
  {
    name: "Travel",
    icon: "✈️",
    value: "₹10,000",
    code: "APFT-2024",
    color: "from-blue-500 to-cyan-500",
    brand: "MakeMyTrip • Uber",
  },
  {
    name: "Entertainment",
    icon: "🎮",
    value: "₹3,000",
    code: "APFE-2024",
    color: "from-purple-500 to-indigo-500",
    brand: "Netflix • Spotify",
  },
];

export default function GiftCards() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // Auto-rotate cards
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % giftCards.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextCard = () => {
    setCurrentIndex((prev) => (prev + 1) % giftCards.length);
  };

  const prevCard = () => {
    setCurrentIndex((prev) => (prev - 1 + giftCards.length) % giftCards.length);
  };

  const goToCard = (index) => {
    setCurrentIndex(index);
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextCard();
    } else if (isRightSwipe) {
      prevCard();
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  // Mouse wheel handler for desktop
  const handleWheel = (e) => {
    if (Math.abs(e.deltaY) > 10) {
      if (e.deltaY > 0) {
        nextCard();
      } else {
        prevCard();
      }
    }
  };

  const cardVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        duration: 0.6,
      },
    },
    exit: (direction) => ({
      x: direction > 0 ? -100 : 100,
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.4,
      },
    }),
  };

  return (
    <section className="py-28 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-lg font-medium mb-6 shadow-lg"
          >
            🎁 Digital Gift Cards
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Perfect Gifts for
            <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Every Occasion
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Choose from our exclusive collection of digital gift cards. Instant
            delivery, wide selection, unforgettable experiences.
          </p>
        </motion.div>

        <div
          className="relative h-[300px] flex items-center justify-center mb-8 cursor-grab active:cursor-grabbing"
          onWheel={handleWheel}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <AnimatePresence mode="popLayout" custom={1}>
            <motion.div
              key={currentIndex}
              custom={1}
              variants={cardVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute w-96 h-64" // Larger card size
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div
                className={`w-full h-full bg-gradient-to-br ${giftCards[currentIndex].color} rounded-3xl shadow-2xl overflow-hidden border-2 border-white/20 backdrop-blur-sm relative`}
              >
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 left-0 w-full h-2 bg-white"></div>
                  <div className="absolute top-6 left-0 w-full h-1 bg-white/50"></div>
                  <div className="absolute bottom-0 left-0 w-full h-2 bg-white"></div>
                </div>

                <div className="relative z-10 p-8 h-full flex flex-col justify-between text-white">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="text-4xl mb-3">
                        {giftCards[currentIndex].icon}
                      </div>
                      <div className="text-2xl font-bold mb-2">
                        {giftCards[currentIndex].name}
                      </div>
                      <div className="text-white/70 text-base">
                        {giftCards[currentIndex].brand}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold bg-white/20 px-4 py-2 rounded-xl">
                        {giftCards[currentIndex].value}
                      </div>
                      <div className="text-white/60 text-sm mt-2">
                        GIFT VALUE
                      </div>
                    </div>
                  </div>

                  <div className="text-center my-6">
                    <div className="text-white/60 text-base mb-2 font-medium">
                      GIFT CARD CODE
                    </div>
                    <div className="font-mono text-xl font-bold tracking-widest bg-white/10 px-6 py-3 rounded-xl border border-white/20">
                      {giftCards[currentIndex].code}
                    </div>
                  </div>

                  <div className="flex justify-between items-center text-white/60 text-base">
                    <div className="flex items-center space-x-2">
                      <span>📅</span>
                      <span>12 MONTHS</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span>⚡</span>
                      <span>INSTANT DELIVERY</span>
                    </div>
                  </div>
                </div>

                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "200%" }}
                  transition={{ duration: 0.8 }}
                />
              </div>

              <div className="md:hidden absolute -bottom-12 left-1/2 transform -translate-x-1/2 text-gray-400 text-sm flex items-center space-x-2">
                <span>← Swipe →</span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center space-x-4 mb-8">
          {giftCards.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => goToCard(index)}
              className={`w-4 h-4 rounded-full transition-all ${
                currentIndex === index
                  ? "bg-purple-500 scale-125 shadow-lg"
                  : "bg-gray-600 hover:bg-gray-500"
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px -10px rgb(168 85 247 / 0.4)",
              y: -2,
            }}
            whileTap={{ scale: 0.95 }}
            className="px-16 py-5 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold text-xl rounded-2xl shadow-2xl relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            <span className="relative z-10">Get This Gift Card →</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
