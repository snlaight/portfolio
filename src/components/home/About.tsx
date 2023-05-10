import { DeveloperIcon } from '@/components';

const About = () => (
  <section className='flex flex-col gap-y-16 items-center mt-52 container-section md:mt-36' id='about'>
    <h2 className='text-6xl font-bold text-gradient-2'>About Me</h2>
    <div className='flex flex-col items-center grid-rows-2 m-auto gap-y-8 lg:grid lg:grid-cols-2 lg:grid-rows-none gap-x-16 justify-items-center lg:w-[80%]'>
      <DeveloperIcon icon='/developer.json' />

      <div className='text-sm xl:text-xl font-medium leading-8 text-gray-50 sm:w-[70%]'>
        <p>
          👋 Hello, I am Santiago, an experienced full-stack software engineer with a diverse background, having lived and worked in over 12 countries. I am skilled in modern technologies such as React, NextJS, TypeScript, NodeJS, and various database solutions such as MongoDB and PostgresSQL
        </p>
        <br />
        <p>
          👨‍💻 I&apos;m also a mentor with experience building custom educational platforms, web apps, and integration projects. I specialize in Node.js and payment processing, and have worked with technologies like Kubernetes, AWS, and GCP. I&apos;m a highly organized and adaptable individual, and always aim to exceed expectations.
        </p>
      </div>
      <div />
    </div>
  </section>
);
export default About;
