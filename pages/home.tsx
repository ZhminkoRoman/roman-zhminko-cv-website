import SplashLayout from '@/components/layouts/splash/SplashLayout';
import Head from 'next/head';
import { ReactElement } from 'react';
import { NextPageWithLayout } from './_app';

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Roman Zhminko CV</title>
        <meta name="description" content="CV Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="flex-col relative flex h-full justify-center items-center z-10">
        <p>Hello Anastasiya!</p>
      </main>
    </>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <SplashLayout>{page}</SplashLayout>;
};

export default Home;
