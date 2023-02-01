import PrimaryLayout from '@/components/layouts/primary/PrimaryLayout';
import TechBlock from '@/components/technologies/techblock/TechBlock';
import { ReactElement } from 'react';
import { NextPageWithLayout } from './_app';

const Technologies: NextPageWithLayout = () => {
  const stack = ['TypeScript', 'React', 'React Native'];

  const basicStack = ['HTML', 'CSS', 'JavaScript'];
  return (
    <>
      <main>
        <p className="text-center mb-5">Basic stack</p>
        <div className="flex flex-col">
          {basicStack.map((s) => (
            <TechBlock techTitle={s} key={s} />
          ))}
        </div>
      </main>
    </>
  );
};

Technologies.getLayout = function getLayout(page: ReactElement) {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};

export default Technologies;
