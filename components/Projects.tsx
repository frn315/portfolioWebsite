import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import { Project } from "../typings";

type Props = { projects: Project[] };

export default function Projects({ projects }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className=" h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-20 md:top-24 uppercase tracking-[20px] text-theme-text-secondary text-xl md:text-2xl">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-theme-accent/80">
        {projects?.map((project, i) => (
          <div
            key={project._id}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-10 md:p-44 h-screen"
          >
            {project.images ? (
              <div className="flex space-x-4 overflow-x-scroll scrollbar-hide max-w-full p-4">
                {project.images.map((img, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ y: -100, opacity: 0 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2 }}
                    viewport={{ once: true }}
                    className="relative h-28 xl:h-60 md:h-48 flex-shrink-0"
                  >
                    <Image
                      className="object-contain rounded-lg shadow-lg"
                      src={img}
                      alt={`Project Image ${idx + 1}`}
                      width={500}
                      height={300}
                      style={{ width: 'auto', height: '100%' }}
                    />
                  </motion.div>
                ))}
              </div>
            ) : (
              <motion.div
                initial={{ y: -100, opacity: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2 }}
                viewport={{ once: true }}
                className="relative h-28 xl:h-80 md:h-72 flex-shrink-0"
              >
                <Image
                  className="object-contain"
                  src={project?.image} alt={project?.title || "Project Image"}
                  width={600}
                  height={400}
                  style={{ width: 'auto', height: '100%' }}
                />
              </motion.div>
            )}

            <div className="space-y-5 md:space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-lg md:text-2xl lg:text-4xl font-semibold text-center">
                <span className="underline decoration-theme-accent/50">
                  Project {i + 1}:
                </span>{" "}
                {project?.title}
              </h4>
              <div className="flex items-center space-x-2 justify-center ">
                {project?.technologies.map((technology) => (
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

              <p className="text-sm md:text-md lg:text-lg text-justify ">
                {project?.summary}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[20%] md:top-[30%] bg-theme-accent/10 left-0 h-[500px] -skew-y-12"></div>
    </motion.div>
  );
}
