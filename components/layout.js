import * as React from 'react'
import Head from 'next/head'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import SideMenu from './side-menu'
import 'isomorphic-fetch'

import '../components/tap_events'

import injectTapEventPlugin from 'react-tap-event-plugin'

const Layout = ({ children }) => (
  <div>
    <Head>
      <title>WebVD - Player</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto:300,400,500'/>
    </Head>

		<MuiThemeProvider>
      <div>
        <SideMenu />
			  {children}
      </div>
		</MuiThemeProvider>
  </div>
)

export default Layout
