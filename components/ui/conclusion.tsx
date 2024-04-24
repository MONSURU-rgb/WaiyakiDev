import Link from "next/link";
import React from "react";

export function Conclusion() {
  return (
    <section className="flex flex-col gap-3 mx-auto max-w-[80vw]">
      <h2 className="text-3xl">SAY HI!</h2>
      <p className="text-xl">
        In my spare time, I like to stay updated about latest Javascript and
        React trends. Moreover, I read other people&apos;s codebase to have a
        glimpse of better ways towards software development. So feel free to get
        in touch with me through any of my socials, or through{" "}
        <Link href="mailto:seowriteru3@gmail.com" className="text-[#F44336]">
          email.
        </Link>
      </p>
    </section>
  );
}
