'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Project, Skill } from '@/components';
import { Project as IProject } from '@/utils/interfaces';

type Props = {
  project: IProject
}

const ProjectPage = ({ project }: Props) => (
  <div className='flex flex-col gap-y-16 items-center lg:grid lg:grid-cols-2 md:gap-x-32'>
    <div className='flex flex-col justify-between h-full'>
      <h1 className='project-name'>{project.title}</h1>
      <div className='links-container'>
        <Link href='/projects' className='cursor-pointer'>
          <Image src='/back-arrow.svg' alt='back arrow' width={40} height={40} className='' />
        </Link>
        {project.url && (
        <Link href={project.url} target='_blank'>
          <button type='button' className='flex gap-x-4 items-center button-custom'>
            View Website
            <Image src='/link-project.svg' alt='external link' width={25} height={25} />
          </button>
        </Link>
        )}
        <Link href={project.repository} target='_blank'>
          <button type='button' className='flex gap-x-4 items-center button-custom'>
            View Code
            <Image src='/github-project.svg' alt='external link' width={25} height={25} />
          </button>
        </Link>
      </div>
      <div className='flex flex-col gap-6'>
        <h2 className='h2-text'>About this project</h2>
        <p className='text-sm leading-8 text-gray-50 md:text-xl'>{project.description}</p>
      </div>
      <div className='flex flex-col space-x-6'>
        <h2 className='text-4xl font-bold text-gray-50'>Technologies</h2>
        <div className='flex flex-row justify-between'>
          {project?.technologies.map((skill: any) => (
            <Skill skill={skill} key={skill.name} widthCustom />
          ))}
        </div>
      </div>
    </div>
    <div className='w-full'>
      <Project project={project} showLinks={false} dragFree />
    </div>
  </div>
);

export default ProjectPage;
