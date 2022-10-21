import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import tw from 'twin.macro';

function Project() {
  return (
    <section css={style.section} id="Project">
      <div css={style.container}>
        <div css={style.titleWrapper}>
          <h1 css={style.title}>Projects</h1>
        </div>
        <div css={style.contentWrapper}>
          <div css={style.imageWrapper}>
            <Image src="/images/portfolioProject.jpg" alt="image" layout="fill" />
          </div>
          <div css={style.textWrapper}>
            <h1 css={style.contentTitle}>개인 포트폴리오 웹사이트</h1>
            <div css={style.duration}>
              <span css={style.mainEl}>기간:</span> 22.09~22.10
            </div>
            <div css={style.description}>
              <b>포트폴리오 용도로 제작한 웹사이트 입니다. </b>
              <span css={style.highlight}>Next.js</span>와 <span css={style.highlight}>TypeScript</span>를 기반으로
              제작하였으며 반응형 웹사이트 제작을 위해 <span css={style.highlight}> TailwindCSS</span>와
              <span css={style.highlight}>Emotion</span>을 사용하였습니다. 또한,
              <span css={style.highlight}> vercel</span>을 이용하여 배포하였습니다.
              <br />
              <br /> Next.js의 기본적인 기능과 SSR에 대한 고민해 볼 수 있었고 배포하는 과정까지 익힐 수 있는 프로젝트
              였습니다.
            </div>
            <div css={style.el}>
              <span css={style.mainEl}>주요기능: </span> 자기소개 / 인적사항 / 기술 스택 / 프로젝트 경험
            </div>
            <div css={style.el}>
              <span css={style.mainEl}>GitHub: </span>
              <Link href={'https://github.com/bear109/portfolio'} passHref>
                <a css={style.a}>https://github.com/bear109/portfolio</a>
              </Link>
            </div>
            <div css={style.el}>
              <span css={style.mainEl}>URL: </span>
              <Link href={'https://bear109portfolio.vercel.app'} passHref>
                <a css={style.a}>https://bear109portfolio.vercel.app</a>
              </Link>
            </div>
            <div css={style.el}>
              <span css={style.mainEl}>기술 스택: </span> Next.js, TypeScript, Emotion, Tailwind CSS
            </div>
          </div>
        </div>
        <div css={style.contentWrapper}>
          <div css={style.imageWrapper}>
            <Image src="/images/recipeProject.jpg" alt="image" layout="fill" />
          </div>
          <div css={style.textWrapper}>
            <h1 css={style.contentTitle}>레시피 냉장고</h1>
            <div css={style.duration}>
              <span css={style.mainEl}>기간:</span> 22.02~22.06 (4인 팀 프로젝트)
            </div>
            <div css={style.description}>
              <b>졸업작품으로 진행한 유통기한 관리 및 사용자 맞춤 레시피 추천 애플리케이션입니다.</b> 식재료의 바코드를
              이용하여 식재료 유통기한 관리를 돕고 <span css={style.highlight}>Firebase</span>를 이용하여 사용자에게
              알림을 보냅니다. 또한, 사용자 선호도 및 최근 조회 레시피를 기반으로 사용자에게 알맞은 레시피를
              추천함으로써 레시피에 대한 관심을 높이고 편의성을 제공합니다. <br />
              <br /> 프론트엔드는
              <span css={style.highlight}> React-Native</span>, 백엔드는 Spring Boot를 사용하였으며 프론트엔드 전반적인
              부분을 맡아서 개발하였습니다. <span css={style.highlight}>Git</span>과
              <span css={style.highlight}> GitHub</span>를 이용하여 진행한 팀 프로젝트이며 React-Native와 Context API,
              fetch를 활용하였습니다. 또한, UI 설계와 개발을 직접하여 <span css={style.highlight}>UX & UI</span>에 대해
              깊게 고민해 볼 수 있는 프로젝트였습니다.
            </div>
            <div css={style.el}>
              <span css={style.mainEl}>주요기능: </span> 바코드 인식을 통한 식재료 유통기한 관리 / 사용자 선호도 및 최근
              조회 기반 레시피 추천 / 식재료 객체 인식을 통한 레시피 검색
            </div>
            <div css={style.el}>
              <span css={style.mainEl}>GitHub: </span>
              <Link href={'https://github.com/HS-Smartup/Shelf-life-management-Recipe-recommendation'} passHref>
                <a css={style.a}>https://github.com/HS-Smartup/Shelf-life-management-Recipe-recommendation</a>
              </Link>
            </div>
            <div css={style.el}>
              <span css={style.mainEl}>기술 스택: </span> React Native, Google API, Naver API, Kakao API, FireBase
            </div>
          </div>
        </div>
        <div css={style.contentWrapper}>
          <div css={style.imageWrapper}>
            <Image src="/images/blogProject.jpg" alt="image" layout="fill" />
          </div>
          <div css={style.textWrapper}>
            <h1 css={style.contentTitle}>리액트 블로그 웹사이트</h1>
            <div css={style.duration}>
              <span css={style.mainEl}>기간:</span> 21.07~21.08
            </div>
            <div css={style.description}>
              <b>React를 기반으로 한 블로그 웹사이트입니다.</b> <span css={style.highlight}>React</span>를 사용한 첫
              프로젝트이며 상태관리 라이브러리인 <span css={style.highlight}>Redux</span>와 통신 라이브러리인
              <span css={style.highlight}> axios</span>를 사용하였습니다. JWT를 사용하여 회원가입 및 로그인 기능을
              구현하였으며 포스트 CRUD를 구현하였습니다.
              <br />
              <br /> React의 기본 기능과 위에 언급한 라이브러리들에 대한 기본적인 지식과 기능에 대해 학습할 수 있는
              프로젝트였습니다.
            </div>
            <div css={style.el}>
              <span css={style.mainEl}>주요기능: </span> 회원가입 및 로그인 / 포스트 조회, 작성, 수정, 삭제
            </div>
            <div css={style.el}>
              <span css={style.mainEl}>GitHub: </span>
              <Link href={'https://github.com/bear109/React-blog'} passHref>
                <a css={style.a}>https://github.com/bear109/React-blog</a>
              </Link>
            </div>
            <div css={style.el}>
              <span css={style.mainEl}>기술 스택: </span> React, Redux, axios, styled-components
            </div>
          </div>
        </div>
        <div css={style.contentWrapper}>
          <div css={style.imageWrapper}>
            <Image src="/images/jsProject.jpg" alt="image" layout="fill" />
          </div>
          <div css={style.textWrapper}>
            <h1 css={style.contentTitle}>스타벅스 웹사이트</h1>
            <div css={style.duration}>
              <span css={style.mainEl}>기간:</span> 21.05~21.06
            </div>
            <div css={style.description}>
              <b>당시의 스타벅스 웹사이트를 클론코딩한 웹사이트 입니다.</b> 처음으로 만든 웹 사이트이며
              <span css={style.highlight}> HTML, CSS, JavaScript</span> 의 기본적인 기능과 구조에 대해 학습할 수 있는
              프로젝트였고 해당 프로젝트를 통해 웹 개발에 흥미를 가지고 입문하게 되었습니다.
            </div>
            <div css={style.el}>
              <span css={style.mainEl}>주요기능: </span> 제품 소개 / 이벤트 소개
            </div>
            <div css={style.el}>
              <span css={style.mainEl}>GitHub:</span>
              <Link href={'https://github.com/bear109/starbucks_vanilla_js'} passHref>
                <a css={style.a}> https://github.com/bear109/starbucks_vanilla_js</a>
              </Link>
            </div>
            <div css={style.el}>
              <span css={style.mainEl}>기술 스택: </span> HTML, CSS, JavaScript
            </div>
          </div>
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
    py-24
    mx-auto
    flex
    flex-col
    items-center
  `,
  titleWrapper: tw`
    flex
    flex-wrap
    w-auto
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
  w-4/5
  flex
  px-5
  py-5
  md:flex-row
  flex-col
  items-center
  border-2
  rounded-lg
  mb-10
  text-gray-900
`,
  imageWrapper: tw`
  h-100
  w-1/2
  mb-10
  relative
bg-gray-600
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
  pr-3
`,
  contentTitle: tw`
  text-4xl
  mb-1
  font-semibold
  mt-5
`,
  duration: tw`
  text-lg
  font-medium
  mb-4
`,
  description: tw`
  text-lg
  leading-relaxed
  mb-4
  border-2
  p-3
  rounded-md
  bg-gray-100
`,
  a: tw`
  text-blue-600
`,
  highlight: tw`
  font-bold
  text-red-500
`,
  mainEl: tw`
  font-semibold
  text-lg
`,
  el: tw`
  text-base
  font-medium
  mb-2
`,
};

export default Project;
