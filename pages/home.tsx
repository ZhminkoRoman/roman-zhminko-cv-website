import PrimaryLayout from '@/components/layouts/primary/PrimaryLayout';
import { ReactElement } from 'react';
import { NextPageWithLayout } from './_app';

const Home: NextPageWithLayout = () => {
  return (
    <>
      <main>
        <div className="px-20">
          <p>Hello there!</p>
          <h3>Shortly Home myself:</h3>
        </div>
      </main>
    </>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};

export default Home;
