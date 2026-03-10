"use client";

import { useMotionValue, useMotionTemplate, motion } from "framer-motion";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

function generateRandomString(length: number) {
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

function CardPattern({
  mouseX,
  mouseY,
  randomString,
  accentColor,
}: {
  mouseX: ReturnType<typeof useMotionValue<number>>;
  mouseY: ReturnType<typeof useMotionValue<number>>;
  randomString: string;
  accentColor: string;
}) {
  const maskImage = useMotionTemplate`radial-gradient(200px at ${mouseX}px ${mouseY}px, white, transparent)`;
  const style = { maskImage, WebkitMaskImage: maskImage };

  return (
    <div className="pointer-events-none">
      <motion.div
        className="absolute inset-0 opacity-0 group-hover/card:opacity-100 transition duration-500"
        style={{ ...style, background: `${accentColor}22` }}
      />
      <motion.div
        className="absolute inset-0 opacity-0 mix-blend-overlay group-hover/card:opacity-100"
        style={style}
      >
        <p className="absolute inset-x-0 text-[10px] h-full break-words whitespace-pre-wrap text-white font-mono transition duration-500 p-2 leading-3">
          {randomString}
        </p>
      </motion.div>
    </div>
  );
}

export function EvervaultCard({
  className,
  accentColor = "#6284f7",
  abbr,
}: {
  className?: string;
  accentColor?: string;
  abbr?: string;
}) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [randomString, setRandomString] = useState("");

  useEffect(() => {
    setRandomString(generateRandomString(1000));
  }, []);

  function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent<HTMLDivElement>) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
    setRandomString(generateRandomString(1000));
  }

  return (
    <div
      className={cn("w-full h-full relative overflow-hidden group/card", className)}
      onMouseMove={onMouseMove}
      style={{ background: `${accentColor}10` }}
    >
      <CardPattern mouseX={mouseX} mouseY={mouseY} randomString={randomString} accentColor={accentColor} />
      {abbr && (
        <div
          className="relative z-10 flex items-center justify-center h-full"
          style={{ color: accentColor, fontSize: 32, fontWeight: 700, opacity: 0.25, letterSpacing: "-0.02em" }}
        >
          {abbr}
        </div>
      )}
    </div>
  );
}
