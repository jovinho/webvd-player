import * as React from 'react'
import Head from 'next/head'
import 'isomorphic-fetch'

import AppBar from './app-bar'

const Layout = ({ children }) => (
  <div>
    <Head>
      <title>WebVD - Player</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet" type="text/css" />
      <link href="https://cdn.muicss.com/mui-0.9.16/css/mui.min.css" rel="stylesheet" type="text/css" media="screen" />
      <link rel='stylesheet' href='/static/video-react.css'/>
    </Head>

    <AppBar />

	  {children}

  </div>
)

export default Layout
