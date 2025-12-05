import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Skill as mySkill } from "../typings";

type Props = {
  skill: mySkill;
  index: number;
};

export default function Skill({ skill, index }: Props) {
  // Deterministic random based on index
  const seededRandom = (seed: number) => {
    const x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
  };

  const x = (seededRandom(index + 1) - 0.5) * 600;
  const y = (seededRandom(index + 2) - 0.5) * 600;

  return (
    <div className="group relative flex cursor-pointer">
      <motion.div
        initial={{
          x: x,
          y: y,
          opacity: 0,
        }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="rounded-full border border-theme-border bg-theme-card w-14 h-14 md:w-16 md:h-16 xl:w-20 xl:h-20 filter group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-theme-accent/50 transition duration-300 ease-in-out flex items-center justify-center relative overflow-hidden"
      >
        <Image
          src={skill?.image}
          alt={skill.title}
          className="object-contain w-[65%] h-[65%]"
          width={128}
          height={128}
        />
      </motion.div>
      <div className="absolute opacity-0 group-hover:opacity-90 transition duration-300 ease-in-out group-hover:bg-theme-bg w-14 h-14 md:w-16 md:h-16 xl:w-20 xl:h-20 rounded-full z-0">
        <div className="flex flex-col items-center justify-center h-full text-theme-text px-1 text-center">
          <p className="text-[10px] font-bold opacity-100">{skill.title}</p>
          <p className="text-sm font-bold opacity-100">{skill.progress}%</p>
        </div>
      </div>
    </div>
  );
}
