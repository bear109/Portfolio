import React from 'react'
import tw from 'twin.macro'

function Project() {

  const projectList = [
    {
      id: 1,
      title: '프로젝트 제목',
      duration: '프로젝트 기간',
      description: '프로젝트 설명',
      mainFunction: '주요기능',
      github: '깃허브 주소',
      skill: '기술 스택',
      img: '이미지',
    }
  ]


  return (
    <section css={style.section}>
      <div css={style.container}>
        <div css={style.titleWrapper}>
          <h1 css={style.title}>Projects</h1>
        </div>
        <div css={style.contentWrapper}>
          <div css={style.imageWrapper}>
            <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
          </div>
          <div css={style.textWrapper}>
            <h1 css={style.contentTitle}>Before they sold out</h1>
            <p css={style.contentDescription}>Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

const style = {
  section: tw`
    text-gray-600
  `,
  container: tw`
    container
    px-56
    py-24
    mx-auto
    flex
    flex-col
  `,
  titleWrapper: tw`
    flex
    flex-wrap
    w-full
    mb-20
    justify-center
  `,
  title: tw`
    text-5xl
    font-bold
    mb-2
    text-gray-900
  `,
  contentWrapper: tw`
    w-full
    flex
    px-5
    py-5
    md:flex-row
    flex-col
    items-center
    border-2
    rounded-lg
  `,
  imageWrapper: tw`
    lg:max-w-lg
    lg:w-full
    md:w-1/2
    w-5/6
    mb-10
    md:mb-0
  `,
  textWrapper: tw`
    lg:flex-grow
    md:w-1/2
    lg:pl-24
    md:pl-16
    flex
    flex-col
    md:items-start
    md:text-left
    items-center
    text-center
  `,
  contentTitle: tw`
    sm:text-4xl
    text-3xl
    mb-4
    font-medium
    text-gray-900
  `,
  contentDescription: tw`
    mb-8
    leading-relaxed
  `
}

export default Project