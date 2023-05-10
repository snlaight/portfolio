import Hero from '@/sections/home';
import { About, Contact, Projects, Skills } from '@/components/home';
import { getTechnologies, getProjects } from '@/utils/sanity/queries';

type HomeProps = {
  params: {
    lang: string
  }
}

const Home = async ({ params }: HomeProps) => {
  const skills = await getTechnologies();
  const projects = await getProjects();
  return (
    <main className='px-24 py-32'>
      <Hero params={params} />
      <About />
      <Skills skills={skills} />
      <Projects projects={projects} />
      <Contact />
    </main>
  );
};

export default Home;
