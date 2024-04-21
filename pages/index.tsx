import Image from "next/image";
import { Inter } from "next/font/google";
import { AnimatedText, WaiyakiHero, WaiyakiHeroText } from "@/components/ui";
import { motion } from "framer-motion";
import { Facebook } from "iconsax-react";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <header className="">
        <nav className="py-12 !sticky top-0 z-50 bg-[#000C24]">
          <ul className="flex gap-[clamp(8px,3vw,48px)] mx-auto text-white px-[clamp(2rem,7vw,8.1rem)] justify-end">
            <li className="hover:opacity-80 cursor-pointer text-[#F44336]">
              Home
            </li>
            <li className="hover:opacity-80 cursor-pointer">About</li>
            <li className="hover:opacity-80 cursor-pointer">Skills</li>
            <li className="hover:opacity-80 cursor-pointer">Works</li>
            <li className="hover:opacity-80 cursor-pointer text-poppins">
              Contact
            </li>
          </ul>
        </nav>

        <motion.div className="pl-[clamp(2rem,5vw,6.9rem)] flex flex-col gap-3 pt-[clamp(1.5rem,4vw,4rem)] bg-[url('/waiyaki-dev-portfolio-hero-section.jpg')] bg-cover bg-center min-h-screen w-full justify-center">
          <AnimatedText
            once
            text="WaiyakiDev"
            el="h1"
            className="text-white font-bold text-3xl md:text-5xl"
          />

          <AnimatedText
            once
            text="Frontend Developer + Technical SEO Writer"
            el="h2"
            className="text-white md:text-2xl text-xl"
          />
          <AnimatedText
            once
            text="I Read, I Code and I Write ✍️"
            el="h3"
            className="text-white md:text-2xl text-xl"
          />

          <section className="flex flex-col items-start justify-start text-white !max-w-[70vw] overflow-hidden gap-2">
            <AnimatedText
              el="h3"
              text={[
                "Passionate Front-End Developer with flare for React, its Ecosystem, AI and Other Web Technologies. ",
                "dedicated to crafting elegant, mobile-responsive and user-friendly web applications.",
                "check my previous projects and portfolio",
              ]}
              className="text-xl"
              repeatDelay={10000}
            />
          </section>
          <figure className="flex gap-4 pt-3 pb-8">
            <Link href="/" className="cursor-pointer">
              <Facebook size="32" color="#FFFFFF" />
            </Link>
            <Link href="/" className="cursor-pointer">
              <FaLinkedin size="32" color="#FFFFFF" />
            </Link>
            <Link href="/" className="cursor-pointer">
              <RiTwitterXLine size="32" color="#FFFFFF" />
            </Link>
          </figure>
        </motion.div>
      </header>

      <main className="">
        {" "}
        <WaiyakiHero />
      </main>
    </>
  );
}
