import { groq } from 'next-sanity';
import { notFound } from 'next/navigation';

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

export const getProjectById = async (id: string) => {
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
  const result = await client.fetch(query);

  if (!result.length) return notFound();
  return result;
};
