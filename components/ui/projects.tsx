import { Link } from "iconsax-react";
import React from "react";
import { Button } from "./moving-box";
import Image from "next/image";

export function Projects() {
  return (
    <section className="flex flex-col gap-4">
      <div className="flex flex-col gap-3 pb-10">
        {/* <button className="bg-[#000C24] dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2 hover:opacity-80 self-center">
              Scroll down to my projects
            </button> */}
      </div>

      <section className="flex flex-col justify-center items-center gap-4 max-w-[80vw]">
        <h2 className="text-3xl md:text-5xl font-bold w-fit pb-1 border-b border-[#000C24]">
          PROJECTS
        </h2>
        <p>
          You shouldn&apos;t waste any time here! Here are some projects for
          your review. These projects encompass many areas of software
          development such as <span>internships</span>, <span>Open-Source</span>
          , <span>Hackathon</span>, and <span>Case Studies</span>.
        </p>

        <article className="flex md:flex-row gap-4 flex-col">
          <div className="!rounded-full md:w-1/3 clip">
            <figure className="!relative w-full aspect-[3/1.5]">
              <Image
                src="/attorneystar-image.jpg"
                alt="Law firm logo"
                className="object-cover"
                fill
              ></Image>
            </figure>
            <div className="flex flex-col gap-2 bg-[#000c247d] pt-2 px-3">
              <h3 className="pb-1 border-b border-[#000C24]">
                #02 ATTORNEYSTER
              </h3>
              <p>
                Attorneyster is a law firm website that create a simple choice
                for complex litigation. It is built using CSS, and HTML thus
                making it legendary
              </p>
              <Link
                href="https://attorneyster-o9iw.vercel.app/src/index.html"
                className="self-center pb-3"
              >
                <Button>View Live Website</Button>
              </Link>
            </div>
          </div>
          <div className="!rounded-full md:w-1/3 clip">
            <figure className="!relative w-full aspect-[3/1.5]">
              <Image
                src="/attorneystar-image.jpg"
                alt="Law firm logo"
                className="object-cover"
                fill
              ></Image>
            </figure>
            <div className="flex flex-col gap-2 bg-[#000c247d] pt-2 px-3">
              <h3 className="pb-1 border-b border-[#000C24]">
                #02 ATTORNEYSTER
              </h3>
              <p>
                Attorneyster is a law firm website that create a simple choice
                for complex litigation. It is built using CSS, and HTML thus
                making it legendary
              </p>
              <Link
                href="https://attorneyster-o9iw.vercel.app/src/index.html"
                className="self-center pb-3"
              >
                <Button>View Live Website</Button>
              </Link>
            </div>
          </div>
          <div className="!rounded-full md:w-1/3 clip">
            <figure className="!relative w-full aspect-[3/1.5]">
              <Image
                src="/attorneystar-image.jpg"
                alt="Law firm logo"
                className="object-cover"
                fill
              ></Image>
            </figure>
            <div className="flex flex-col gap-2 bg-[#000c247d] pt-2 px-3">
              <h3 className="pb-1 border-b border-[#000C24]">
                #01 ATTORNEYSTER
              </h3>
              <p>
                Attorneyster is a law firm website that create a simple choice
                for complex litigation. It is built using CSS, and HTML thus
                making it legendary
              </p>
              <Link
                href="https://attorneyster-o9iw.vercel.app/src/index.html"
                className="self-center pb-3"
              >
                <Button>View Live Website</Button>
              </Link>
            </div>
          </div>
        </article>
      </section>
    </section>
  );
}
