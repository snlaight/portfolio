import Image from 'next/image';
import Link from 'next/link';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

import { Project as ProjectI } from '@/utils/interfaces';
import { EmblaOptionsNoDrag, EmblaOptionsDrag } from '@/utils/embla';
import { urlForImage } from '@/utils/sanity/image.builder';

interface Props {
  project: ProjectI;
  showLinks?: boolean;
  dragFree?: boolean;
}

const Project = ({ project, showLinks = true, dragFree = false }: Props) => {
  const slides = Array.from(Array(4).keys());
  const delayRandom = Math.floor(Math.random() * (3000 - 2500 + 1) + 2500);
  const emblaOptions = dragFree ? EmblaOptionsDrag : EmblaOptionsNoDrag;
  const [emblaRef] = useEmblaCarousel(emblaOptions, [Autoplay({ delay: delayRandom, stopOnInteraction: false })]);
  const imageSources = project?.images?.map((image) => urlForImage(image));

  return (
    <div className='rounded-2xl bg-background_secondary embla'>
      <div className='embla__viewport' ref={emblaRef}>
        <div className='embla__container'>
          {slides.map((index: number) => (
            <div className='p-2 embla__slide' key={index}>
              {dragFree ? (
                <Image
                  className='w-full h-full rounded-xl embla__slide__img'
                  src={imageSources?.[index]}
                  alt={project.title}
                  onError={(e) => {
                    e.currentTarget.src = '/sl-logo.png';
                    e.currentTarget.alt = 'SL Logo';
                  }}
                  width={1599}
                  height={899}

                />
              ) : (
                <Image
                  className='w-full h-full rounded-xl embla__slide__img'
                  src={imageSources?.[index]}
                  alt={project.title}
                  onError={(e) => {
                    e.currentTarget.src = '/sl-logo.png';
                    e.currentTarget.alt = 'SL Logo';
                  }}
                  width={640}
                  height={360}
                />
              )}
            </div>
          ))}
        </div>
        {showLinks && (
          <div className='flex justify-between items-center px-8 py-2'>
            <Link href={`./projects/${project.id}`}>
              <span className='text-lg font-bold text-gray-50'>{project.title}</span>
            </Link>
            <div className='flex gap-4 items-center'>
              <Link
                as={project.repository}
                passHref
                href={project.repository}
                target='_blank'
                className='p-1 rounded-lg duration-300 hover:shadow-icons-project'
              >
                <Image alt='Github' src='/github-project.svg' width={30} height={30} />
              </Link>
              <Link
                as={project.url}
                passHref
                href={project.url}
                target='_blank'
                className='p-1 rounded-lg duration-300 hover:shadow-icons-project'
              >
                <Image alt='Github' src='/link-project.svg' width={30} height={30} />
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Project;
