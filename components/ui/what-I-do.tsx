import React from "react";
import { AnimatedText } from "./animated-text";
import Image from "next/image";

export function Doings() {
  return (
    <div className="flex flex-col justify-center items-center gap-4 max-w-[70vw]">
      <h2 className="text-5xl font-bold">MY DOINGS...</h2>
      <figure className="!relative h-[18rem] aspect-square">
        <Image
          src="/AvatarAndIcons.svg"
          alt="waiyaki"
          className="aspect-square"
          fill
        />
      </figure>

      <p className="text-xl text-center">
        I am a skilled front-end developer with expertise in JavaScript,
        TypeScript, React.js, Next.js, Tailwind CSS, Git, and GitHub. With
        experience in developing responsive websites and integrating
        Django-based Restful API, I am proficient in crafting reusable
        components and utilizing the Context API for effective state management.
        I am also experienced in conducting unit testing, establishing error
        boundaries, and adhering to clean programming principles.
      </p>

      <p className="text-xl text-center">
        Being a <span>Frontend Developer</span> with previous <span>SEO</span>{" "}
        experience, I have all it takes to create well-performing web
        applications that meet client expectations, and helps them attain their
        business goals. My strong attention to details, ability to meet
        deadlines,and excellent communication skills contributed to my success
        in client retention, and successful project delivery.
      </p>
    </div>
  );
}
