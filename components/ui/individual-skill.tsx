import React from "react";
import { Button } from "./moving-box";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

interface ProjectProps {
  title: string;
  description: string;
  src: string;
  link: string;
  alt: string;
}

export function IndividualSkill({
  title,
  description,
  src,
  link,
  alt,
}: ProjectProps) {
  return (
    <motion.div
      initial={{ opacity: 0.0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.5,
        duration: 0.3,
        ease: "easeInOut",
      }}
    >
      <figure className="!relative h-[clamp(8rem,10vw,14rem)] w-full aspect-[3/1.5]">
        <Image src={src} alt={alt} className="object-cover" fill></Image>
      </figure>
      <div className="flex flex-col gap-2 bg-[#000c247d] pt-2 px-3">
        <h3 className="pb-1 border-b border-[#000C24]">{title}</h3>
        <p>{description}</p>
        <Link href={link} className="self-center pb-3">
          <Button>View Live Website</Button>
        </Link>
      </div>
    </motion.div>
  );
}
