'use client';

import { useState, ChangeEvent } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Project } from '@/components';

type Props = {
  projects: any[];
}

const ProjectsPage = ({ projects }: Props) => {
  const [projectCategory, setProjectCategory] = useState('all');
  return (
    <main className='flex relative flex-col gap-y-16 items-center py-32 w-full sm:py-16 container-section'>
      <h1 className='text-6xl font-bold text-gradient-2'>My Projects</h1>
      <form>
        <select
          className='input-select-custom w-fit'
          onChange={(e: ChangeEvent<HTMLSelectElement>) => setProjectCategory(e.target.value)}
        >
          <option value='all'>All</option>
          <option value='own'>Own</option>
          <option value='collaboration'>Collaboration</option>
        </select>
      </form>

      <div className='grid grid-cols-1 gap-x-16 gap-y-16 justify-center m-auto w-full font-medium md:grid-cols-2 lg:grid-cols-3'>
        {projects
          .filter((project) => {
            if (projectCategory === 'all') return project;
            if (projectCategory === project.category) return project;
            return null;
          })
          .map((project) => (
            <Project key={project.id} project={project} />
          ))}
      </div>

      <Link href='/' className='absolute left-0 top-20 cursor-pointer sm:left-0'>
        <Image src='/back-arrow.svg' alt='back arrow' width={50} height={50} className='' />
      </Link>
    </main>
  );
};

export default ProjectsPage;
