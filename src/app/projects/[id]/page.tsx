import React from 'react';

import ProjectPage from '@/sections/project';
import { getProjectById } from '@/utils/sanity/queries';

type Props = {
    params: {
        id: string
    },
}

const ProjectDetails = async ({ params }:Props) => {
  const data = await getProjectById(params.id);

  return (
    <main className='flex flex-col items-center px-8 py-24 my-0 w-full text-center md:text-start md:my-14 sm:py-32 container-section'>
      <ProjectPage project={data[0]} />
    </main>
  );
};

export default ProjectDetails;
