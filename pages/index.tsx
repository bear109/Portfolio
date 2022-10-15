import AboutMe from 'components/AboutMe';
import ContactMe from 'components/ContactMe';
import Project from 'components/Project';
import Skills from 'components/Skills';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <>
      <AboutMe />
      <Skills />
      <Project />
      <ContactMe />
    </>
  );
};

export default Home;
