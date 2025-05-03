"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export function ToggleTheme() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const nextTheme = resolvedTheme === "dark" ? "light" : "dark";

  return (
    <Button
      variant="outline"
      onClick={() => setTheme(nextTheme)}
      className="cursor-pointer flex items-center gap-2 absolute right-20 top-5"
    >
      {resolvedTheme === "dark" ? (
        <>
          <Moon className="w-4 h-4" />
          Dark
        </>
      ) : (
        <>
          <Sun className="w-4 h-4" />
          Light
        </>
      )}
    </Button>
  );
}
