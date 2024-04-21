import { delay, motion } from "framer-motion";

export function WaiyakiHeroText() {
  const text = "Nice meeting You!".split(" ");
  const letters = Array.from("I'm WaiyakiDev");
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
        delayChildren: 1,
      },
    }),
  };

  const child = {
    hidden: {
      opacity: 0,
      x: 0,
      y: -10,
      transition: { type: "spring", stiffness: 100, damping: 12, delay: 1 },
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 12, delay: 1 },
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      style={{ overflow: "hidden", display: "flex", fontSize: "1.5rem" }}
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          variants={child}
          initial="hidden"
          animate="visible"
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.div>
  );
}
