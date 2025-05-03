import { Button } from "./ui/button";

const Hero = () => {
  return (
    <div className="relative h-[800px] py-30 text-center max-w-4xl flex flex-col justify-center items-center gap-6">
      <h1 className="font-bold text-5xl">
        Hi, I'm John Lira <br /> a fullstack developer
      </h1>
      <p className="max-w-2/3 text-center">
        Web development student with experience in HTML, CSS, JS, React, and
        Node.js. Currently learning TypeScript and Next.js, driven by curiosity
        and growth.
      </p>
      <div className="mt-8 flex gap-4 items-center justify-center">
        <div className="rainbow-border pb-[2px] px-[2px] rounded-lg">
          <a href="#contact">
            <Button
              variant="outline"
              className="cursor-pointer dark:bg-neutral-900 dark:text-white dark:hover:bg-neutral-900"
            >
              Contact Me
            </Button>
          </a>
        </div>
        <div className="rainbow-border pb-[2px] px-[2px] rounded-lg">
          <a href="#projects">
            <Button className="dark:bg-white cursor-pointer">
              Explore my Projects
            </Button>
          </a>
        </div>
      </div>
      <div className="absolute bottom-20 animate-bounce flex items-center flex-col">
        <svg
          className="w-6 h-6 text-gray-500"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
        <p className="text-sm text-gray-500 mt-1">Scroll</p>
      </div>
    </div>
  );
};
export default Hero;
