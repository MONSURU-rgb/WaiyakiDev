"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "../ui/aurora-background";
import Image from "next/image";
import { Doings } from "./what-I-do";

export function WaiyakiHero() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 50 }}
        transition={{
          delay: 0.5,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <Doings />
        {/* <motion.div className="text-3xl md:text4xl font-bold dark:text-white text-center">
          Nice meeting You! 👍
        </motion.div>
        <div className="text-2xl md:text-3xl font-bold dark:text-white text-center max-w-[80vw]">
          I&apos;m WaiyakiDev, a Frontend Developer with passion for learning
          about React and it ecosystems.
        </div> */}

        <figure className="!relative h-[18rem] aspect-square">
          <Image
            src="/AvatarAndIcons.svg"
            alt="waiyaki"
            className="aspect-square"
            fill
          />
        </figure>
        <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2 hover:opacity-80">
          Scroll down
        </button>
      </motion.div>
    </AuroraBackground>
  );
}
