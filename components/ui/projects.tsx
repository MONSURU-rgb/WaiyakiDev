import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/moving-box";
import Image from "next/image";
import { IndividualSkill } from "./individual-skill";

export function Projects() {
  return (
    <section
      className="flex flex-col justify-center items-center gap-4 max-w-[80vw] mx-auto"
      id="waiyakidev-projects"
    >
      <h2 className="text-3xl md:text-5xl font-bold w-fit pb-1 border-b border-[#000C24]">
        PROJECTS
      </h2>
      <p>
        You shouldn&apos;t waste any time here! Here are some projects for your
        review. These projects encompass many areas of software development such
        as <span>internships</span>, <span>Open-Source</span>,{" "}
        <span>Hackathon</span>, and <span>Case Studies</span>.
      </p>

      <article className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-4 flex-col pb-[clamp(1.5rem,4vw,4rem)] flex-wrap">
        <IndividualSkill
          title="#01 ATTORNEYSTER"
          src="/attorneystar-image.jpg"
          alt="attorneyster law firm website"
          link="https://attorneyster-o9iw.vercel.app/src/index.html"
          description="Attorneyster is a law firm website that create a simple choice for complex litigation. It is built using CSS, and HTML thus making it legendary"
        />
        <IndividualSkill
          title="#02 COMMODITY-GRADING-SYSTEM"
          src="/cgs.png"
          alt="commodity grading system"
          link="https://commodity-grading-sysytem.vercel.app/"
          description="This is the desktop version of a commodity grading system web application that provides a simple and efficient way to manage inventory."
        />
        <IndividualSkill
          title="#03 Open Source"
          src="/tublian-open-source.png"
          alt="tublian open source project"
          link="https://tublian-integration.vercel.app/"
          description="The idea behind this project is to create a simple and user friendly app that exemplifies the steps involved in online payment platforms. This app consist of four basic sections."
        />
        <IndividualSkill
          title="#04 MEDI-SYNC-CARE"
          src="/medisyncare.png"
          alt="medisyncare website"
          link="https://medi-sync-care.vercel.app/"
          description="This app is a medical adherence platform that provides revolutionary medication adherence solutions for chronic illness. It facilitate effective management of medication regimen between the health provider and the patient."
        />
      </article>
    </section>
  );
}
