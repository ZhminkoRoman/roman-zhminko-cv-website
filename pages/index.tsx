import Head from 'next/head';
import { ReactElement } from 'react';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import { NextPageWithLayout } from './_app';

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Roman Zhminko CV</title>
        <meta name="description" content="CV Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <p>Main page</p>
      </main>
    </>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};

export default Home;
