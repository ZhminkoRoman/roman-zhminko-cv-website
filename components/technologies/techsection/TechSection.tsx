import TechBlock from '../techblock/TechBlock';

interface ITechStack {
  [key: string]: string[] | ITechStack;
}

export interface ITechSection extends React.ComponentPropsWithoutRef<'div'> {
  stack: ITechStack | string[];
}

const TechSection: React.FC<ITechSection> = ({ stack }) => {
  if (Array.isArray(stack)) {
    return (
      <>
        {stack.map((section: string) => {
          return <TechBlock techTitle={section} key={section} />;
        })}
      </>
    );
  }
  return (
    <>
      {Object.entries(stack).map(([basicKey, basicValue]) => {
        return <TechSection stack={basicValue} key={basicKey} />;
      })}
    </>
  );
};

export default TechSection;
