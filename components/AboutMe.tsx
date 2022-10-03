import React from 'react';
import tw from 'twin.macro';

function AboutMe() {
  return (
    <section css={style.sectionWrapper}>
      <div css={style.sectionContainer}>
        <div css={style.textWrapper}>
          <h1 css={style.titleText}>
            안녕하세요. 주도적이고 책임감있는 웹 프론트엔드 개발자 <br />
            <span css={style.titleInnerText}>서승한</span> 입니다.
          </h1>
          <p css={style.descriptionText}>
            &nbsp;저는 프론트엔드 개발 직무를 수행하기 위해 JavaScript와 React를 활용하여 &apos;리액트 블로그&apos;,
            &apos;유통기한 관리 및 사용자 맞춤 레시피 추천 애플리케이션&apos; 등의 프로젝트를 진행하였습니다. React,
            Redux, React-Native와 같은 기술들을 활용하여 웹 및 앱 설계, UI 제작, 프론트엔드 기능 구현을 한 경험이 있으며
            프론트엔드 성능 개선을 위해 노력하고 있습니다. 또한, 최근에는 Next.js와 TypeScript에 대해 관심을 가지고
            학습하고 있습니다.
          </p>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
        </div>
      </div>
    </section>
  );
}

const style = {
  sectionWrapper: tw`
  text-gray-600
  `,
  sectionContainer: tw`
    container
    mx-auto
    flex
    px-10
    py-24
    md:flex-row
    flex-col
    items-center
  `,
  textWrapper: tw`
    lg:flex-grow
    md:w-1/2
    md:pr-16
    flex
    flex-col
    md:items-start
    md:text-left
    mb-16
    md:mb-0
    items-center
    text-center
  `,
  titleText: tw`
    text-4xl
    mb-4
    font-medium
    text-gray-900
    leading-10
  `,
  titleInnerText: tw`
    text-5xl
    font-semibold
  `,
  descriptionText: tw`
    mb-8
    leading-relaxed
    font-medium
    text-lg
  `,
};

export default AboutMe;
