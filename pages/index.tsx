import SplashLayout from '@/components/layouts/splash/SplashLayout';
import StartNavigationLink from '@/components/navigation/startNavigationLink/StartNavigationLink';
import Head from 'next/head';
import { ReactElement } from 'react';
import { NextPageWithLayout } from './_app';

const Splash: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Roman Zhminko CV</title>
        <meta name="description" content="CV Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="screen screenBorder flex-col">
        <StartNavigationLink />
        {/* <BackgroundNoise /> */}
      </main>
    </>
  );
};

Splash.getLayout = function getLayout(page: ReactElement) {
  return <SplashLayout>{page}</SplashLayout>;
};

export default Splash;
