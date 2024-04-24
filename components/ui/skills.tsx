import { motion } from "framer-motion";

export function Skills() {
  return (
    <motion.div
      initial={{ opacity: 0.0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.3,
        duration: 0.8,
        ease: "easeInOut",
      }}
      className="relative flex flex-col gap-4 items-center justify-center"
    >
      <section className="flex flex-col gap-3 mx-auto max-w-[80vw] justify-center items-center py-[clamp(0.8rem,3vw,3rem)]">
        <h2 className="text-5xl font-bold">MY SKILLSET</h2>
        <p className="text-xl">
          As a front-end developer aimed at delivering highly-performing web
          applications, Here are the list of tools I use to build and maintain
          websites.
        </p>
        <div className="text-xl text-center grid gap-3">
          <div>
            <h4 className="text-3xl font-bold mb-2">Front-end Technologies</h4>
            <p>
              I have expertise in HTML5, CSS3 (including Flexbox and Grid), and
              modern JavaScript (ES6+). I&apos;m proficient in frameworks like
              React.js and have experience with Vue.js or Angular (optional,
              depending on project requirements).
            </p>
          </div>
          <div>
            <h4 className="text-3xl font-bold mb-2">
              Design and Development Tools
            </h4>
            <p>
              I&apos;m familiar with responsive web design principles, UI/UX
              design concepts, and implementing accessibility standards (WCAG).
              I use version control systems like Git, front-end build tools
              (e.g., Webpack, Gulp), and browser DevTools for efficient
              development and debugging.
            </p>
          </div>
          <div>
            <h4 className="text-3xl font-bold mb-2">Testing and Integration</h4>
            <p>
              I have experience in testing and debugging web applications,
              working with RESTful APIs, and integrating front-end with back-end
              technologies (Node.js, Express, etc.). I&apos;m also familiar with
              setting up CI/CD pipelines for continuous integration and
              deployment.
            </p>
          </div>
          <div>
            <h4 className="text-3xl font-bold mb-2">Methodologies</h4>
            <p>
              I follow Agile/Scrum methodologies for project management,
              ensuring efficient collaboration and delivery. I prioritize clean
              code practices, documentation, and continuous learning to stay
              updated with the latest trends and best practices in front-end
              development.
            </p>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
