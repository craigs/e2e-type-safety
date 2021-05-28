import { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'

import { User, useUsersQuery } from '~graphql'

import styles from './index.module.scss'

const Page: NextPage = () => {
  const { loading, data } = useUsersQuery()
  if (loading) return

  const users = data.getUsers as User[]

  return (
    <div className={styles.container}>
      <Head>
        <title>Nextjs GraphQL API client</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>GitHub Users</h1>

        <ul>
          {users.map(({ id, login, name }) => (
            <li key={id}>
              {login} {name}
            </li>
          ))}
        </ul>
      </main>
    </div>
  )
}

export default Page
