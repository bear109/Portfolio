import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

interface props {
  children: React.ReactNode
}

function Layout({ children }: props) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout