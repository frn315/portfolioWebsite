import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import { Experience } from "../typings";

type Props = { experience: Experience };

export default function ExperienceCard({ experience }: Props) {
  return (
    <article className="flex flex-col md:flex-row rounded-lg items-center md:items-start space-y-7 md:space-y-0 md:space-x-10 flex-shrink-0 w-[400px] md:w-[500px] xl:w-[800px] snap-center bg-theme-card p-5 md:p-8 hover:opacity-100 opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden border border-theme-border hover:shadow-lg hover:shadow-theme-accent/20">
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="w-28 h-28 rounded-full xl:w-[150px] xl:h-[150px] flex-shrink-0 relative overflow-hidden"
      >
        <Image
          className="object-cover object-center"
          src={experience?.companyImage}
          alt={experience?.company || "Company Image"}
          fill
        />
      </motion.div>

      <div className="px-0 w-full flex flex-col items-center md:items-start">
        <h4 className="text-3xl font-light text-theme-text text-center md:text-left">{experience?.jobTitle}</h4>
        <p className="font-bold text-xl mt-1 text-theme-accent text-center md:text-left">{experience?.company}</p>
        <div className="flex space-x-2 my-2 justify-center md:justify-start">
          {experience?.technologies.map((technology) => (
            <Image
              key={technology._id}
              className="h-10 w-10 rounded-full object-cover"
              src={technology?.image}
              alt={technology.title || "Technology"}
              width={40}
              height={40}
            />
          ))}
        </div>
        <p className="uppercase py-3 text-theme-text-secondary text-center md:text-left">
          {new Date(experience?.dateStarted).getFullYear()} -{" "}
          {experience.isCurrentlyWorkingHere
            ? "Present"
            : new Date(experience?.dateEnded).getFullYear()}
        </p>

        <ul className="list-disc space-y-2 ml-5 text-base text-theme-text pr-5 text-left">
          {experience?.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
