import { Inter } from "next/font/google";
import { AnimatedText, Skills, WaiyakiHero } from "@/components/ui";
import { motion } from "framer-motion";
import { Facebook } from "iconsax-react";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { Button } from "@/components/ui/moving-box";
import { SparklesCore } from "@/components/ui/sparkles";
import { Projects } from "@/components/ui/projects";
import { Conclusion } from "@/components/ui/conclusion";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="pb-[clamp(2rem,4vw,4rem)]">
      <header>
        <nav className="py-12 !sticky top-0 z-50 bg-[#000C24]">
          <ul className="flex gap-[clamp(8px,3vw,48px)] mx-auto text-white px-[clamp(2rem,7vw,8.1rem)] justify-end">
            <li className="hover:opacity-80 cursor-pointer text-[#F44336]">
              Home
            </li>
            <li className="hover:opacity-80 cursor-pointer">
              <Link href="#about-me">About</Link>
            </li>
            <li className="hover:opacity-80 cursor-pointer">
              <Link href="#waiyakidev-skills">Skills</Link>
            </li>
            <li className="hover:opacity-80 cursor-pointer">
              <Link href="#waiyakidev-projects">Works</Link>
            </li>
          </ul>
        </nav>

        <motion.div className="pl-[clamp(2rem,5vw,6.9rem)] flex flex-col gap-3 pt-[clamp(1.5rem,4vw,4rem)] bg-[url('/waiyaki-dev-portfolio-hero-section.jpg')] bg-cover bg-center min-h-screen w-full justify-center">
          <section className="flex flex-col overflow-hidden h-[5rem]">
            <div className="h-[20rem] w-fullflex flex-col items-center justify-start overflow-hidden rounded-md">
              <AnimatedText
                once
                text="WaiyakiDev"
                el="h1"
                className="text-white font-bold text-[40px] md:text-7xl"
              />
              <div className="w-fit h-[10rem] relative">
                {/* Gradients */}

                {/* Core component */}
                <SparklesCore
                  background="transparent"
                  minSize={0.4}
                  maxSize={1}
                  particleDensity={1200}
                  className="w-full h-full"
                  particleColor="#FFFFFF"
                />

                {/* Radial Gradient to prevent sharp edges */}
                <div className="absolute inset-0 w-full h-full bg-inherit [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
              </div>
            </div>
          </section>
          <section className="pr-[clamp(2rem,5vw,6.9rem)]">
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

            <article className="flex flex-col items-start justify-start text-white !max-w-[70vw] overflow-hidden gap-2">
              <AnimatedText
                el="h3"
                text={[
                  "Passionate Front-End Developer with flare for React, its Ecosystem, AI and Other Web Technologies. ",
                  "Dedicated to crafting elegant, mobile-responsive and user-friendly web applications.",
                ]}
                className="text-xl"
                repeatDelay={200}
              />
            </article>
          </section>

          <Link href="mailto:seowriteru3@gmail.com">
            <Button>Let&apos;s Collaborate</Button>
          </Link>
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

      <main>
        <WaiyakiHero />
        <Skills />
        <Projects />
        <Conclusion />
      </main>
    </div>
  );
}
