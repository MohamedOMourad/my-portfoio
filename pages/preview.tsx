import React from 'react'
import Head from 'next/head'
import { Preview } from 'react-bricks/frontend'

const PagePreview: React.FC = () => {
  return (
    <>
      <Head>
        <title>Previeew</title>
      </Head>
      <Preview />
    </>
  )
}

export default PagePreview
