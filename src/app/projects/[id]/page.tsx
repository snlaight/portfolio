import React from 'react';

type Props = {
    params: {
        id: string
    }
}

const ProjectPage = ({ params }:Props) => (
  <div className='py-32 text-white'>Project Page: {params.id}</div>
);

export default ProjectPage;
