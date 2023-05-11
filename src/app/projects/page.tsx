import React from 'react';

import ProjectsPage from '@/sections/projects';
import { getProjects } from '@/utils/sanity/queries';

const AllProjectsPage = async () => {
  const data = await getProjects();
  return (
    <ProjectsPage projects={data} />
  );
};

export default AllProjectsPage;
