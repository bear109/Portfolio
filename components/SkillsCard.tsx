import Image from 'next/image';
import React from 'react';
import tw from 'twin.macro';

interface props {
  img?: string;
  title: string;
}

function SkillsCard({ img, title }: props) {
  return (
    <div css={style.cardWrapper}>
      <div css={style.card}>
        <div css={style.image}>
          <Image src={`${img}`} alt="image" layout="fill" />
        </div>
        <h2 css={style.cardTitle}>{title}</h2>
        {/* <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p> */}
      </div>
    </div>
  );
}

const style = {
  cardWrapper: tw`
    xl:w-1/4
    md:w-1/2
    p-4
  `,
  card: tw`
    bg-gray-100
    p-4
    rounded-lg
  `,
  image: tw`
    h-40
    rounded
    w-full
    object-cover
    object-center
    mb-6
    relative
  `,
  cardTitle: tw`
    text-2xl
    text-gray-900
    font-bold
    mb-4
    text-center
  `,
};

export default SkillsCard;
