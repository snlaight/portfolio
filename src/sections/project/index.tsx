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
  <div className='flex flex-col-reverse gap-y-16 items-center lg:grid lg:grid-cols-2 md:gap-x-32'>
    <div className='flex flex-col gap-16'>
      <h1 className='text-6xl font-bold text-gradient-2'>{project.title}</h1>
      <div className='flex flex-col gap-x-8 gap-y-8 items-center sm:justify-center md:justify-between md:flex-row'>
        <Link href='/projects' className='flex left-14 flex-row items-center text-sm text-white cursor-pointer md:text-lg sm:left-0'>
          <Image src='/back-arrow.svg' alt='back arrow' width={30} height={30} className='' />
          <p className='flex pl-2 md:hidden'>Back to projects</p>
        </Link>
        <Link href={project.url} target='_blank'>
          <button type='button' className='flex gap-x-4 items-center button-custom'>
            View Website
            <Image src='/link-project.svg' alt='external link' width={25} height={25} />
          </button>
        </Link>
        <Link href={project.repository} target='_blank'>
          <button type='button' className='flex gap-x-4 items-center button-custom'>
            View Code
            <Image src='/github-project.svg' alt='external link' width={25} height={25} />
          </button>
        </Link>
      </div>
      <div className='flex flex-col gap-6'>
        <h2 className='text-4xl font-bold text-gray-50'>About this project</h2>
        <p className='text-xl leading-8 text-gray-50'>{project.description}</p>
      </div>
      <div className='flex flex-col gap-6'>
        <h2 className='text-4xl font-bold text-gray-50'>Technologies</h2>
        <div className='grid grid-cols-4 gap-12'>
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
