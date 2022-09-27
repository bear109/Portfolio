import React from 'react'
import tw from 'twin.macro'

function Footer() {
  return (
    <footer className="text-gray-600">
      <div css={style.footerWrapper}>
        <span css={style.footerMainText}>bear109&apos;s portfolio</span>
        <p css={style.copyrightText}>© 2022 Seo Seung Han - all rights reserved
        </p>
      </div>
    </footer>
  )
}

const style = {
  footerWrapper: tw`
    container
    px-3
    py-5
    mx-auto
    flex
    items-center
    sm:flex-row
    flex-col
    border-t-2
    mt-4
  `,
  footerMainText: tw`
    flex
    font-medium
    items-center
    md:justify-start
    justify-center
    text-gray-900
    ml-3
    text-xl
  `,
  copyrightText: tw`
    text-sm
    text-gray-500
    sm:ml-4
    sm:pl-4
    sm:border-l-2
    sm:border-gray-200
    sm:py-2
    sm:mt-0
    mt-4
  `
}

export default Footer