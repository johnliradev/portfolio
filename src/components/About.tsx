import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

const About = () => {
  return (
    <Card className=" text-center dark:shadow-[0_4px_6px_-1px_rgba(255,255,255,0.30)]   shadow-[0_4px_6px_-1px_rgba(0,0,0,0.75)]">
      <CardTitle className="text-xl">About me</CardTitle>
      <CardContent>
        <p>
          Hello! My name is John, and I’m a Computer Science student. I have a
          strong interest in web development and am constantly improving my
          practical skills in technologies like HTML, CSS, JavaScript, React,
          Node.js, and Express. Currently, I’m expanding my knowledge in
          TypeScript and Next.js, always looking to learn and apply new tools in
          my daily routine. I’m a proactive person, I enjoy working in a team,
          and I’m always ready to take on new challenges.
        </p>
      </CardContent>
      <CardFooter className="mx-auto w-[80%]">
        <a href="#projects" className="w-full">
          <Button className="cursor-pointer font-bold w-full">
            See my projects
          </Button>
        </a>
      </CardFooter>
    </Card>
  );
};

export default About;
