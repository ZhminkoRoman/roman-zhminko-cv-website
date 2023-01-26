import PrimaryLayout from '@/components/layouts/primary/PrimaryLayout';
import { ReactElement } from 'react';
import { NextPageWithLayout } from './_app';

const About: NextPageWithLayout = () => {
  return (
    <>
      <main>
        <p>About page</p>
      </main>
    </>
  );
};

About.getLayout = function getLayout(page: ReactElement) {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};

export default About;
