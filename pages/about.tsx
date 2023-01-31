import PrimaryLayout from '@/components/layouts/primary/PrimaryLayout';
import { ReactElement } from 'react';
import { NextPageWithLayout } from './_app';

const About: NextPageWithLayout = () => {
  return (
    <>
      <main>
        <div className="px-20">
          <p>Hello there!</p>
          <h3>Shortly about myself:</h3>
        </div>
      </main>
    </>
  );
};

About.getLayout = function getLayout(page: ReactElement) {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};

export default About;
