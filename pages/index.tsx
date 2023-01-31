import NavBar from '@/components/navigation/navbar/NavBar';
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
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex justify-center align-middle bg-red-50 w-full h-screen">
        <NavBar />
      </main>
    </>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};

export default Home;
