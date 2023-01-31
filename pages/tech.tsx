import PrimaryLayout from '@/components/layouts/primary/PrimaryLayout';
import { ReactElement } from 'react';
import { NextPageWithLayout } from './_app';

const Technologies: NextPageWithLayout = () => {
  return (
    <>
      <main>
        <p>Technologies page</p>
      </main>
    </>
  );
};

Technologies.getLayout = function getLayout(page: ReactElement) {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};

export default Technologies;
