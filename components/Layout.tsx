import Head from 'next/head';
import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

interface props {
  children: React.ReactNode;
}

function Layout({ children }: props) {
  return (
    <>
      <Head>
        <title>Bear109`s Portfolio</title>
      </Head>

      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
