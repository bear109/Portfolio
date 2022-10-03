import React from 'react';
import tw from 'twin.macro';
import { DiGithubBadge } from 'react-icons/di';
import { MdEmail, MdCall } from 'react-icons/md';
import Link from 'next/link';

function ContactMe() {
  return (
    <section css={style.section}>
      <div css={style.container}>
        <div css={style.titleWrapper}>
          <h1 css={style.titleText}>Contact Me</h1>
        </div>
        <div css={style.contentWrapper}>
          <div css={style.cardWrapper}>
            <div css={style.card}>
              <div css={style.iconWrapper}>
                <DiGithubBadge size={100} />
              </div>
              <div css={style.textWrapper}>
                <h2 css={style.cardTitle}>GitHub</h2>
                <Link href="https://github.com/bear109" css={style.cardDescription}>
                  github.com/bear109
                </Link>
              </div>
            </div>
          </div>
          <div css={style.cardWrapper}>
            <div css={style.card}>
              <div css={style.iconWrapper}>
                <MdEmail size={50} />
              </div>
              <div css={style.textWrapper}>
                <h2 css={style.cardTitle}>Mail</h2>
                <Link href="mailto:jokerbear109@gmail.com" css={style.cardDescription}>
                  jokerbear109@gmail.com
                </Link>
              </div>
            </div>
          </div>
          <div css={style.cardWrapper}>
            <div css={style.card}>
              <div css={style.iconWrapper}>
                <MdCall size={50} />
              </div>
              <div css={style.textWrapper}>
                <h2 css={style.cardTitle}>Phone</h2>
                <p css={style.cardDescription}>010-9716-5839</p>
              </div>
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
    px-5
    py-24
    mx-auto
    flex
    flex-wrap
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
    px-5
    w-full
    flex
    flex-wrap
  `,
  cardWrapper: tw`
    p-4
    lg:w-1/3
    md:w-full
  `,
  card: tw`
    flex
    border-2
    rounded-lg
    border-gray-200
    border-opacity-50
    p-8
    sm:flex-row
    flex-col
  `,
  iconWrapper: tw`
    w-16
    h-16
    sm:mr-8
    sm:mb-0
    mb-4
    inline-flex
    items-center
    justify-center
    rounded-full
    bg-gray-100
    text-gray-700
    flex-shrink-0
  `,
  textWrapper: tw`
    flex-grow
  `,
  cardTitle: tw`
    text-gray-900
    text-xl
    font-bold
    mb-3
  `,
  cardDescription: tw`
    leading-relaxed
    text-base
  `,
};

export default ContactMe;
