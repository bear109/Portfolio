import AboutMe from 'components/AboutMe'
import Skills from 'components/Skills'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <>
      <AboutMe />
      <Skills />
    </>
  )
}

export default Home
