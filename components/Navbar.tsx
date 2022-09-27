import { css } from '@emotion/react'
import React from 'react'
import tw from 'twin.macro'

function Navbar() {
  return (
    <header className="text-gray-600 body-font">
      <div css={style.navbarWrapper}>
        <a css={style.logoText} href="./" >bear109&apos;s portfolio</a>
        <nav css={style.navTextWrapper}>
          <a css={style.navText}>About Me</a>
          <a css={style.navText}>Skills</a>
          <a css={style.navText}>Project</a>
          <a css={style.navText}>Contact Me</a>
        </nav>
      </div>
    </header>
  )
}


const style = {
  navbarWrapper: tw`
    container
    mx-auto
    flex
    flex-wrap
    p-5
    flex-col
    md:flex-row
    items-center
  `,
  logoText: tw`
    flex
    items-center
    text-gray-900
    mb-4
    md:mb-0
    ml-3 
    text-2xl
    font-extrabold
  `,
  navTextWrapper: tw`
    ml-40
    flex
    flex-wrap
    items-center
    justify-between
    w-3/5
    text-lg
    font-semibold
  `,
  navText: tw`
    mr-5
    hover:text-gray-900
  `
}

export default Navbar