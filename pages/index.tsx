import Image from "next/image";
import { Inter } from "next/font/google";
import { WaiyakiHero, WaiyakiHeroText } from "@/components/ui";

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

        <div className="px-[clamp(2rem,5vw,6.9rem)] grid gap-3">
          <h1 className="text-white font-bold text-5xl pt-[18vh]">
            WaiyakiDev
          </h1>
          <h3 className="text-white text-2xl">
            Frontend Developer + Technical SEO Writer
          </h3>
          <figure></figure>
        </div>
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
