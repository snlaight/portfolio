'use client';

import Link from 'next/link';

import { Project } from '@/components';
import { IProjectProps } from '@/utils/interfaces/props';

const Projects = ({ projects }: IProjectProps) => (
  <section className='flex flex-col gap-y-16 items-center mt-36 w-full container-section' id='projects'>
    <h2 className='text-6xl font-bold text-gradient-2'>My Projects</h2>

    <div className='grid grid-cols-1 gap-x-16 gap-y-16 justify-center m-auto w-full font-medium md:grid-cols-2 lg:grid-cols-3'>
      {projects
        .filter((project) => project.featured)
        .map((project) => (
          <Project key={project._id} project={project} />
        ))}
    </div>

    <Link href='./projects'>
      <button type='button' className='m-auto button-custom w-fit'>View all projects</button>
    </Link>
  </section>
);

export default Projects;
