import BackgroundNoise from '@/components/backgroundNoise/BackgroundNoise';
import SplashLayout from '@/components/layouts/splash/SplashLayout';
import StartNavigationLink from '@/components/navigation/startNavigationLink/StartNavigationLink';
import SplashScreenSubtitle from '@/components/splashScreenSubtitle/SplashScreenSubtitle';
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
      <main className="flex-col relative flex h-full justify-center items-center">
        <BackgroundNoise />
        <StartNavigationLink />
        <SplashScreenSubtitle />
      </main>
    </>
  );
};

Splash.getLayout = function getLayout(page: ReactElement) {
  return <SplashLayout>{page}</SplashLayout>;
};

export default Splash;
