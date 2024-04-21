"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "../ui/aurora-background";
import Image from "next/image";

export function WaiyakiHero() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <motion.div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
          Nice meeting You!
        </motion.div>
        <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
          I&apos;m WaiyakiDev
        </div>

        <figure className="!relative w-[25rem] h-[28rem] aspect-square">
          <Image
            src="/AvatarAndIcons.svg"
            alt="waiyaki"
            className="aspect-square"
            fill
          />
        </figure>
        <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
          Scroll down
        </button>
      </motion.div>
    </AuroraBackground>
  );
}
