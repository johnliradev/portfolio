import { ToggleTheme } from "./toggle-theme";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <div className="fixed left-1/2 -translate-1/2 pt-10 w-screen dark:bg-neutral-800/80 backdrop-blur-xl ">
      <div className=" mx-auto w-full max-w-[1440px] flex items-center justify-between ">
        <p className="font-medium">JOHN LIRA</p>
        <p className="font-bold italic text-yellow-400">IN DEVELOPMENT</p>
        <ToggleTheme />
      </div>
    </div>
  );
};

export default Header;
