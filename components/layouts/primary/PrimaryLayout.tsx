import Cursor from '@/components/cursor/Cursor';

export interface IPrimaryLayout {
  children: React.ReactNode;
}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({ children }) => {
  return (
    <div className="flex w-full h-screen">
      <main className="flex px-10 py-5 w-full h-screen">
        <Cursor />
        {children}
      </main>
    </div>
  );
};

export default PrimaryLayout;
