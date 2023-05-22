'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Typewriter } from 'react-simple-typewriter';

import { TestimonialsData, ProfileImages } from '@/utils/constants/data';
import useInterval from '@/utils/hooks/useInterval';

type HeroProps = {
    params: {
        lang: string
    }
}

const Hero = ({ params: { lang } }: HeroProps) => {
  const currentImage = useInterval({ data: ProfileImages, intervalTime: 5000 });
  const testimonial = useInterval({ data: TestimonialsData, intervalTime: 8000 });

  return (
    <div
      className='grid grid-cols-1 gap-8 gap-y-16 justify-items-center items-center mt-32 w-full md:mt-48 lg:grid lg:grid-cols-2 lg:gap-y-0'
      id='presentacion'
    >
      <div className='flex flex-col gap-y-16 items-start pl-4 text-gray-50'>
        <div>
          <h1 className='text-6xl font-black sm:text-4xl md:text-6xl'>Santiago Laight</h1>
          <h3 className='text-lg font-bold duration-300 sm:text-4xl text-blue-shadow w-fit md:text-4xl text-gradient-1'>
            <Typewriter
              words={['Frontend Developer', 'Backend Developer']}
              loop
              cursor
              cursorColor='#29a847'
              typeSpeed={125}
            />
          </h3>
        </div>
        <p className='text-xl lg:w-[30rem] leading-8 font-italic font-light animate-fade-text-from-side'>

          &ldquo;{testimonial.message}.&rdquo;
          - <span className='font-bold'>{testimonial.name} ({testimonial.title} at {testimonial.org})</span>
        </p>
        <div>
          <Link
            href={lang === 'es' ? 'Santiago_Laight_CV-2023.pdf' : 'Santiago_Laight_CV-2023.pdf'}
            download
            className='max-w-[20px] button-custom'
            target='_blank'
          >
            Download CV
          </Link>
        </div>
      </div>
      <div className='relative'>
        <Image
          priority
          alt='profile'
          src={currentImage.src}
          width={330}
          height={405}
          className='w-[330px] h-[405px] image-animation'
        />

        <Link
          href='https://www.linkedin.com/in/santiago-laight'
          target='_blank'
          className='absolute right-0 -bottom-16 pulse lg:bottom-0 lg:-right-16'
        >
          <Image alt='Linkedin' src='/linkedin.svg' width={50} height={50} />
        </Link>
        <Link
          href='https://github.com/snlaight'
          target='_blank'
          className='absolute left-0 -bottom-32 m-auto pulse lg:flex lg:bottom-0 lg:items-center lg:top-0 lg:h-fit lg:-left-16'
        >
          <Image alt='Github' src='/github.svg' width={50} height={50} />
        </Link>
      </div>
    </div>
  );
};

export default Hero;
