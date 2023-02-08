import PrimaryLayout from '@/components/layouts/primary/PrimaryLayout';
import TechSection from '@/components/technologies/techsection/TechSection';
import { ReactElement } from 'react';
import { NextPageWithLayout } from './_app';

interface ITechStack {
  [key: string]: string[] | ITechStack;
}

const Technologies: NextPageWithLayout = () => {
  const stack: ITechStack = {
    HTML: ['HTML'],
    CSS: ['CSS'],
    'JavaScript Basics': {
      'Version Control Systems': {
        Git: ['Git'],
        'Repo hosting services': ['GitHub', 'GitLab'],
      },
      'Authentication Strategies': ['JWT', '0Auth'],
      React: {
        Styling: {
          'CSS Preprocessors': ['Sass/SCSS', 'PostCSS', 'Less'],
          'CSS Frameworks': ['Material UI', 'Tailwind', 'ANT Design'],
          'CSS Architecture': ['BEM', 'CSS Modules'],
        },
        'Build Tools': {
          'Package Managers': ['npm', 'yarn'],
          'Linters and Formatters': ['Prettier', 'ESLint'],
          'Module Bundlers': ['Vite'],
        },
        'State Management': {
          'Component State': ['Component State / Context'],
          'Redux / Toolkit': {
            'Data Persistance': ['Redux Persist'],
            'Async Actions': ['Redux Saga', 'Redux Thunk'],
          },
          MobX: ['MobX'],
        },
        'Type Checkers': ['PropTypes'],
        'Form Helpers': ['Formik', 'React-Hook-Form'],
        'API Calls': {
          REST: ['Axios'],
        },
        Routing: ['React-Router', 'React Navigation'],
        Testing: ['Jest', 'react-testing-library'],
        Other: ['Storybook', 'Firebase', 'Practical React libraries'],
        Mobile: ['React Native'],
      },
    },
  };
  return (
    <>
      <main>
        <div className="flex flex-wrap">
          {Object.entries(stack).map(([_, basicValue], idx) => {
            return <TechSection stack={basicValue} key={idx} />;
          })}
        </div>
      </main>
    </>
  );
};

Technologies.getLayout = function getLayout(page: ReactElement) {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};

export default Technologies;
