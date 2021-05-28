import '../styles/globals.scss'

import { ApolloProvider } from '@apollo/client'
import React from 'react'

import { apolloClient } from '../lib/apolloClient'

const App = ({ Component, pageProps }) => (
  <ApolloProvider client={apolloClient}>
    <Component {...pageProps} />
  </ApolloProvider>
)

export default App
