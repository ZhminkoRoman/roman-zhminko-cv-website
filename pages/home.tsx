import PrimaryLayout from '@/components/layouts/primary/PrimaryLayout';
import SplashLayout from '@/components/layouts/splash/SplashLayout';
import { ReactElement } from 'react';
import { NextPageWithLayout } from './_app';

const Home: NextPageWithLayout = () => {
  return (
    <>
      <main>
        <div className="px-10 mt-10">
          <p>Hello there!</p>
          <h3>Shortly Home myself:</h3>
        </div>
      </main>
    </>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <SplashLayout>
      <PrimaryLayout>{page}</PrimaryLayout>
    </SplashLayout>
  );
};

export default Home;
