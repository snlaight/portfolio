import { groq } from 'next-sanity';

import { client } from '@/sanity/lib/client';

export const getTechnologies = () => {
  const query = groq`
    *[_type == "technology"] {
      _id,
      name,
      image {
        asset -> {
          _id,
          url
        }
      },
      category
    }
  `;

  return client.fetch(query);
};

export const getProjects = () => {
  const query = groq`
    *[_type == "project"] {
      _id,
      title,
      images[],
      technologies[] -> {
        _id,
        name,
        image {
          asset -> {
            _id,
            url
          }
        },
        category,
      },
      repository,
      video,
      url,
      featured,
      category,
      description
    }
  `;

  return client.fetch(query);
};

export const getProjectById = (id: string) => {
  const query = groq`
    *[_type == "project" && _id == "${id}"] {
      _id,
      title,
      images[],
      technologies[] -> {
        _id,
        name,
        image {
          asset -> {
            _id,
            url
          }
        },
        category,
      },
      repository,
      video,
      url,
      featured,
      category,
      description
    }
  `;

  return client.fetch(query);
};
