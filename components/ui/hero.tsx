"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "../ui/aurora-background";
import Image from "next/image";
import { Doings } from "./what-I-do";
import { Button } from "./moving-box";
import Link from "next/link";
import { Projects } from "./projects";

export function WaiyakiHero() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.5,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4 py-12"
      >
        <Doings />
      </motion.div>
    </AuroraBackground>
  );
}
