import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Label } from "./ui/label";

const Tech = () => {
  return (
    <Card className=" text-center dark:shadow-[0_4px_6px_-1px_rgba(255,255,255,0.30)]   shadow-[0_4px_6px_-1px_rgba(0,0,0,0.75)]">
      <CardTitle className="text-xl">Technologies</CardTitle>
      <CardContent className="space-y-3">
        <Label htmlFor="frontend" className="font-bold">
          Front-end
        </Label>
        <ul id="frontend" className="grid grid-cols-4 text-start pb-4">
          {[
            "Typescript",
            "Javascript",
            "HTML",
            "CSS",
            "TailwindCSS",
            "ShadCN UI",
            "Material UI",
            "Bootstrap",
          ].map((x, index) => (
            <li
              className="text-sm text-center
                py-1 px-3 border border-gray-200 dark:border-gray-800 rounded-full"
              key={index}
            >
              {x}
            </li>
          ))}
        </ul>
        <Label htmlFor="backend" className="font-bold">
          Back-end
        </Label>
        <ul id="backend" className="grid grid-cols-4 text-start pb-4">
          {[
            "Node JS",
            "Express JS",
            "Supabase",
            "PostgreSQL",
            "API",
            "Mongo DB",
            "JWT",
          ].map((x, index) => (
            <li
              className="text-sm text-center
                py-1 px-3 border border-gray-200 dark:border-gray-800 rounded-full"
              key={index}
            >
              {x}
            </li>
          ))}
        </ul>
        <Label htmlFor="tools" className="font-bold">
          Tools
        </Label>
        <ul id="tools" className="grid grid-cols-4 text-start pb-4">
          {["Git", "Vercel", "Jest", "Figma", "Linux", "CI/CD"].map(
            (x, index) => (
              <li
                className="text-sm text-center
                py-1 px-3 border border-gray-200 dark:border-gray-800 rounded-full"
                key={index}
              >
                {x}
              </li>
            ),
          )}
        </ul>{" "}
      </CardContent>
    </Card>
  );
};

export default Tech;
