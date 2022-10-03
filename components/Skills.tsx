import React from 'react';
import tw from 'twin.macro';
import SkillsCard from './SkillsCard';

function Skills() {
  const skillList = [
    {
      id: 1,
      img: '/images/JS.png',
      title: 'HTML & CSS & JavaScript',
    },
    {
      id: 2,
      img: '/images/TS.png',
      title: 'TypeScript',
    },
    {
      id: 3,
      img: '/images/react.png',
      title: 'React',
    },
    {
      id: 4,
      img: '/images/redux.png',
      title: 'Redux',
    },
    {
      id: 5,
      img: '/images/reactnative.png',
      title: 'React-Native',
    },
    {
      id: 6,
      img: '/images/Nextjs.png',
      title: 'Next.js',
    },
    {
      id: 7,
      img: '/images/git.png',
      title: 'Git & GitHub',
    },
    {
      id: 8,
      img: '/images/emotion.png',
      title: 'Emotion',
    },
  ];

  return (
    <section css={style.section}>
      <div css={style.container}>
        <div css={style.titleWrapper}>
          <h1 css={style.titleText}>Skills</h1>
        </div>
        <div css={style.contentWrapper}>
          {skillList.map((skill) => (
            <SkillsCard key={skill.id} img={skill.img} title={skill.title} />
          ))}
        </div>
      </div>
    </section>
  );
}

const style = {
  section: tw`
    text-gray-600
  `,
  container: tw`
    container
    px-28
    py-24
    mx-auto
  `,
  titleWrapper: tw`
    flex
    flex-wrap
    w-full
    mb-20
    justify-center
  `,
  titleText: tw`
    text-5xl
    font-bold
    mb-2
    text-gray-900
  `,
  contentWrapper: tw`
    flex
    flex-wrap
    -m-4
  `,
};

export default Skills;
