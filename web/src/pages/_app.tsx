import '../styles/globals.scss'

import { ApolloProvider } from '@apollo/client'
import { NextPage } from 'next'
import { AppProps } from 'next/dist/next-server/lib/router/router'
import React from 'react'

import { apolloClient } from '../lib/apolloClient'

const App: NextPage<AppProps> = ({ Component, pageProps }) => (
  <ApolloProvider client={apolloClient}>
    <Component {...pageProps} />
  </ApolloProvider>
)

export default App
