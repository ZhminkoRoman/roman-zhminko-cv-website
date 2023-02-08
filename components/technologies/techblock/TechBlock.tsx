export interface ITechBlock extends React.ComponentPropsWithoutRef<'button'> {
  techTitle: string;
}

const TechBlock: React.FC<ITechBlock> = ({ techTitle, ...buttonProps }) => {
  return (
    <button
      {...buttonProps}
      className="basis-64 flex-auto group-hover:bg-sky-600 border-2 border-theme-gray p-4 m-2 hover:cursor-none hover:border-theme-white hover:bg-theme-gray hover:text-theme-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.25)]"
    >
      {techTitle}
    </button>
  );
};

export default TechBlock;
