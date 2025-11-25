"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function FloatingIcons() {
  const icons = [
    { src: "/card.png", top: "22%", left: "12%" },
    { src: "/shopping.png", top: "30%", left: "78%" },
    { src: "/upi.webp", top: "60%", left: "18%" },
    { src: "/coin.png", top: "70%", left: "75%" },
  ];

  const [sparkles, setSparkles] = useState([]);

  useEffect(() => {
    setSparkles(
      Array.from({ length: 20 }).map(() => ({
        top: `${Math.random() * 90}%`,
        left: `${Math.random() * 90}%`,
        duration: `${2 + Math.random() * 3}s`,
      }))
    );
  }, []);

  return (
    <>
      {sparkles.map((s, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-white/70 rounded-full blur-[1.5px]"
          style={{
            top: s.top,
            left: s.left,
            animation: `twinkle ${s.duration} infinite ease-in-out`,
          }}
        />
      ))}

      {icons.map((item, i) => (
        <motion.div
          key={i}
          style={{ top: item.top, left: item.left }}
          className="absolute drop-shadow-2xl"
          initial={{ y: 0 }}
          animate={{ y: -25 }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 3 + i,
            ease: "easeInOut",
          }}
        >
          <Image
            src={item.src}
            width={90}
            height={90}
            alt="floating-icon"
            className="opacity-100"
          />
        </motion.div>
      ))}
    </>
  );
}
