import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { mockSkills, mockExperiences, mockProjects } from '../utils/mockData';
import { Skill } from '../typings';
import SkillItem from './Skill';

type Props = {
  skills: Skill[];
};

const Skills = ({ skills }: Props) => {
  const [skillItems, setSkillItems] = useState<Skill[]>([]);

  useEffect(() => {
    const uniqueSkills = new Map<string, Skill>();

    // Helper to add valid skills
    const addSkill = (skill: any) => {
      // Ensure we have a valid image URL and title
      if (skill?.image && (typeof skill.image === 'string' || skill.image.url)) {
        const imgUrl = typeof skill.image === 'string' ? skill.image : skill.image.url;
        if (!uniqueSkills.has(imgUrl)) {
          // Normalize to Skill type if needed, but mockData seems consistent enough
          // We need title and progress. If missing, provide defaults.
          const normalizedSkill: Skill = {
            ...skill,
            title: skill.title || "Unknown",
            progress: skill.progress || 100,
            image: skill.image
          };
          uniqueSkills.set(imgUrl, normalizedSkill);
        }
      }
    };

    // Add from props first
    skills?.forEach(skill => addSkill(skill));

    // Add from mockData as backup/supplement
    mockSkills.forEach(skill => addSkill(skill));

    mockExperiences.forEach(exp => {
      exp.technologies.forEach(tech => addSkill(tech));
    });

    mockProjects.forEach(proj => {
      proj.technologies.forEach(tech => addSkill(tech));
    });

    let skillList = Array.from(uniqueSkills.values());

    // We need exactly 32 icons.
    if (skillList.length < 32) {
      const originalLength = skillList.length;
      let i = 0;
      while (skillList.length < 32) {
        skillList.push(skillList[i % originalLength]);
        i++;
      }
    } else {
      skillList = skillList.slice(0, 32);
    }

    setSkillItems(skillList);
  }, [skills]);

  // Layout: 4 - 6 - 6 - 6 - 6 - 4
  // Total: 32

  const renderRow = (startIndex: number, count: number) => {
    return (
      <div className="flex justify-center gap-5 md:gap-7 mb-5 md:mb-7">
        {skillItems.slice(startIndex, startIndex + count).map((skill, i) => (
          <SkillItem key={startIndex + i} skill={skill} />
        ))}
      </div>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center bg-gradient-to-b from-darkBackground to-black"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>

      <div className="flex flex-col items-center justify-center mt-20">
        {renderRow(0, 4)}
        {renderRow(4, 6)}
        {renderRow(10, 6)}
        {renderRow(16, 6)}
        {renderRow(22, 6)}
        {renderRow(28, 4)}
      </div>
    </motion.div>
  );
};

export default Skills;
