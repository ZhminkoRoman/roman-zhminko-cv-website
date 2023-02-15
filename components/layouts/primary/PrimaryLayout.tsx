import Cursor from '@/components/cursor/Cursor';

export interface IPrimaryLayout {
  children: React.ReactNode;
}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({ children }) => {
  return (
    <>
      <Cursor />
      <>
        {/* <NavBar /> */}
        <main className="flex w-screen h-screen p-2 border-4">{children}</main>
      </>
    </>
  );
};

export default PrimaryLayout;
