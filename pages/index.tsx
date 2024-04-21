import Image from "next/image";
import { Inter } from "next/font/google";
import { WaiyakiHero, WaiyakiHeroText } from "@/components/ui";
import { motion } from "framer-motion";
import { Facebook } from "iconsax-react";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <header className="bg-[url('/waiyaki-dev-portfolio-hero-section.jpg')] bg-cover bg-center h-screen w-full">
        <nav className="py-12 !sticky top-0 z-50 bg-[#3e40455c]">
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

        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="px-[clamp(2rem,5vw,6.9rem)] grid gap-3"
        >
          <h1 className="text-white font-bold text-3xl pt-[18vh] md:text-4xl lg:text-5xl">
            WaiyakiDev
          </h1>
          <h3 className="text-white md:text-2xl text-xl">
            Frontend Developer + Technical SEO Writer
          </h3>
          <figure className="flex gap-4">
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

      {/* <figure className="relative h-screen w-full">
        <Image
          src="/waiyaki-dev-portfolio-hero-section.jpg"
          alt="waiyaki"
          fill
          className="aspect-square object-fill"
        />
      </figure> */}
    </>
  );
}
