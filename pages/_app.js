import React from 'react'
import Head from 'next/head'
import '../styles/App.css'
import '../styles/Home.css'
import Navbar from '../modules/layout/navbar'

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
      <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        <title>Council of Health insurance</title>
        <style>
          {``}
        </style>
      </Head>
      <div>
        <Navbar />
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default MyApp
