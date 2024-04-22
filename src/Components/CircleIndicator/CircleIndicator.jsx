import React, { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";

const CircleIndicator = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const { scrollY } = useScroll();

  useEffect(() => {
    const unsubscribeY = scrollY.on("change", () => {
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollY.get() / height;
      setScrollProgress(progress);
    });

    return () => {
      unsubscribeY();
    };
  }, [scrollY]);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 9999,
      }}
    >
      <motion.div
        style={{
          width: `${scrollProgress * 100}%`,
          backgroundColor: "#53f280",
          height: "4px",
        }}
      />
    </div>
  );
};

export default CircleIndicator;
