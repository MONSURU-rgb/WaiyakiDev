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
        <section className="flex flex-col gap-4">
          <div className="flex flex-col gap-3">
            <figure className="!relative h-[18rem] aspect-square">
              <Image
                src="/AvatarAndIcons.svg"
                alt="waiyaki"
                className="aspect-square"
                fill
              />
            </figure>
            <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2 hover:opacity-80 self-center">
              Scroll down to my projects
            </button>
          </div>

          <section className="flex flex-col gap-3 justify-center items-center">
            <h2 className="text-3xl md:text-5xl font-bold w-fit pb-1 border-b border-black">
              PROJECTS
            </h2>
            <p>
              You shouldn&apos;t waste any time here! Here are some projects for
              your review. These projects encompass many areas of software
              development such as <span>internships</span>,{" "}
              <span>Open-Source</span>, <span>Hackathon</span>, and{" "}
              <span>Case Studies</span>.
            </p>

            <article></article>
          </section>
        </section>
      </motion.div>
    </AuroraBackground>
  );
}
