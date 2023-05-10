'use client';

import { useState } from 'react';

import { dataSkills } from '@/utils/constants/data';
import { Skill } from '@/components';
import { Skill as ISkill } from '@/utils/interfaces';

interface Props {
  skills: ISkill[];
}

const Skills = ({ skills }: Props) => {
  const [skillsCategory, setSkillsCategory] = useState({ index: 0, category: 'frontend' });

  const onClickCategory = (index: number, category: string) => {
    setSkillsCategory({ ...skillsCategory, index, category });
  };

  return (
    <section className='flex flex-col gap-y-16 items-center mt-36 container-section' id='skills'>
      <h2 className='text-4xl font-bold md:text-6xl text-gradient-2'>My Skills</h2>

      {/* Skills */}
      <div className='flex flex-col w-full m-auto font-medium gap-y-16 lg:w-[70%]'>
        <div className='flex justify-between text-gray-50'>
          <div
            className={`tab ${skillsCategory.index === 0 && 'tab-active'}`}
            onClick={() => onClickCategory(0, 'frontend')}
          >
            Frontend
          </div>
          <div
            className={`tab ${skillsCategory.index === 1 && 'tab-active'}`}
            onClick={() => onClickCategory(1, 'backend')}
          >
            Backend
          </div>
          <div
            className={`tab ${skillsCategory.index === 2 && 'tab-active'}`}
            onClick={() => onClickCategory(2, 'database')}
          >
            Database
          </div>
          <div
            className={`tab ${skillsCategory.index === 3 && 'tab-active'}`}
            onClick={() => onClickCategory(3, 'others')}
          >
            Others
          </div>
        </div>

        <div className='grid grid-cols-3 gap-y-20 justify-items-center md:grid-cols-5'>
          {skills
            .filter((skill) => skill.category === skillsCategory.category)
            .map((skill, index) => (
              <Skill key={index} skill={skill} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
