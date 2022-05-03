
import React, {useEffect, useState} from 'react'
import { Layout } from '../components/'
import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { Router } from 'next/router'
import {SpinnerLoading} from '../components/index';



function MyApp({Component, pageProps }: AppProps) {

  const [loading, setLoading] = useState(false);
  
  Router.events.on('routeChangeStart', (url) => {
    setLoading(true);
  });

  Router.events.on('routeChangeComplete', (url) => {
    setLoading(false);
  }); 

  return(


      <>
        {loading && <SpinnerLoading/>}
        {
          !loading &&
          <Layout >
            <Component {...pageProps} />
          </Layout>
        }

      </>
      

  )
}

export default MyApp
