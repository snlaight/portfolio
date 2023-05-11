import React from 'react';

import ProjectPage from '@/sections/project';
import { getProjectById } from '@/utils/sanity/queries';

type Props = {
    params: {
        id: string
    }
}

const ProjectDetails = async ({ params }:Props) => {
  const data = await getProjectById(params.id);
  const project = data[0];
  return (
    <main className='flex relative flex-col gap-y-16 items-center py-24 w-full sm:py-32 container-section'>
      <ProjectPage project={project} />
    </main>
  );
};

export default ProjectDetails;
