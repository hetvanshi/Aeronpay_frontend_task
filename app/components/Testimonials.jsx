"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [auto, setAuto] = useState(true);

  const testimonials = [
    {
      name: "Harlem Singh",
      role: "Customer",
      content:
        "I was looking for a way to make quick and easy payments using my mobile. When I found AeronPay, it made sending money so much easier.",
      avatar: "👤",
      rating: 5,
    },
    {
      name: "Priya Sharma",
      role: "Small Business Owner",
      content:
        "AeronPay transformed how I handle business payments. QR system is super efficient & settlement times are excellent.",
      avatar: "👩‍💼",
      rating: 5,
    },
    {
      name: "Rohan Mehta",
      role: "Freelancer",
      content:
        "Digital Gold is very easy to invest in using AeronPay. Smooth UI and reliable security.",
      avatar: "👨‍💻",
      rating: 4,
    },
    {
      name: "Ananya Patel",
      role: "College Student",
      content:
        "As a student, AeronPay is perfect. Gift cards & prepaid card help me manage budget easily.",
      avatar: "👩‍🎓",
      rating: 5,
    },
  ];

  // autoplay
  useEffect(() => {
    if (!auto) return;

    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [auto, testimonials.length]);

  const next = () => setActive((p) => (p + 1) % testimonials.length);
  const prev = () =>
    setActive((p) => (p - 1 + testimonials.length) % testimonials.length);

  const floatingPositions = [
    { top: "10vh", left: "8vw" },
    { top: "15vh", left: "80vw" },
    { top: "70vh", left: "20vw" },
    { top: "72vh", left: "70vw" },
    { top: "35vh", left: "40vw" },
    { top: "82vh", left: "55vw" },
  ];

  const icons = ["⭐", "💫", "✨", "🌟", "🎯", "💖"];

  const variants = {
    enter: { x: 200, opacity: 0, scale: 0.9 },
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 250, damping: 25 },
    },
    exit: { x: -200, opacity: 0, scale: 0.9 },
  };

  return (
    <section className="py-28 bg-gradient-to-br from-slate-50 via-white to-purple-50 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        {icons.map((icon, i) => (
          <motion.div
            key={i}
            className="absolute text-3xl opacity-20"
            style={{
              top: floatingPositions[i].top,
              left: floatingPositions[i].left,
            }}
            animate={{
              y: [0, -15, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              repeat: Infinity,
              duration: 6 + i,
              delay: i * 0.4,
            }}
          >
            {icon}
          </motion.div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-slate-900">
            What Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">
              Users Say
            </span>
          </h2>
          <p className="text-lg text-slate-600 mt-4">
            Real reviews from real people.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <button
            onClick={prev}
            onMouseEnter={() => setAuto(false)}
            onMouseLeave={() => setAuto(true)}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-white shadow rounded-full flex items-center justify-center z-20"
          >
            ←
          </button>

          <button
            onClick={next}
            onMouseEnter={() => setAuto(false)}
            onMouseLeave={() => setAuto(true)}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-white shadow rounded-full flex items-center justify-center z-20"
          >
            →
          </button>

          <div className="h-80 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute w-full max-w-4xl"
              >
                <div className="bg-white p-10 rounded-3xl shadow-xl">
                  <div className="text-6xl text-purple-200">"</div>

                  <p className="text-xl text-slate-700 text-center mt-4 mb-6">
                    {testimonials[active].content}
                  </p>

                  <div className="flex justify-center items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full flex items-center justify-center text-2xl text-white">
                      {testimonials[active].avatar}
                    </div>

                    <div className="text-left">
                      <p className="text-lg font-bold text-slate-900">
                        {testimonials[active].name}
                      </p>
                      <p className="text-purple-600 font-medium">
                        {testimonials[active].role}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-10 space-x-3">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              onMouseEnter={() => setAuto(false)}
              onMouseLeave={() => setAuto(true)}
              className={`w-4 h-4 rounded-full ${
                i === active ? "bg-purple-500 scale-125" : "bg-slate-300"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}
