import React from 'react'
import tw from 'twin.macro'

function Project() {

  const projectList = [
    {
      id: 1,
      title: '개인 포트폴리오 웹사이트',
      duration: '22.09~22.10',
      description: '프로젝트 설명',
      mainFunction: '자기소개, 인적사항, 기술 스택, 프로젝트 경험',
      github: 'https://github.com/bear109/portfolio',
      skill: 'Next.js, TypeScript, Emotion, Tailwind CSS',
      img: '이미지',
    },
    {
      id: 2,
      title: '유통기한 관리 및 사용자 맞춤 레시피 추천 애플리케이션',
      duration: '22.02~22.06',
      description: '프로젝트 설명',
      mainFunction: '바코드 인식을 통한 식재료 유통기한 관리 / 사용자 선호도 및 최근 조회 기반 레시피 추천 / 식재료 객체 인식을 통한 레시피 검색',
      github: 'https://github.com/HS-Smartup/Shelf-life-management-Recipe-recommendation',
      skill: 'React Native, Google API, Naver API, Kakao API, FireBase',
      img: '이미지',
    },
    {
      id: 3,
      title: '리액트 블로그 웹사이트',
      duration: '21.07~21.08',
      description: '프로젝트 설명',
      mainFunction: '회원가입 및 로그인 / 포스트 조회, 작성, 수정, 삭제',
      github: 'https://github.com/bear109/React-blog',
      skill: 'React, Redux, axios, styled-components',
      img: '이미지',
    },
    {
      id: 4,
      title: '스타벅스 웹사이트',
      duration: '21.05~21.06',
      description: '프로젝트 설명',
      mainFunction: '제품 소개, 이벤트 소개',
      github: 'https://github.com/bear109/starbucks_vanilla_js',
      skill: 'HTML, CSS, JavaScript',
      img: '이미지',
    },
    {
      id: 5,
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