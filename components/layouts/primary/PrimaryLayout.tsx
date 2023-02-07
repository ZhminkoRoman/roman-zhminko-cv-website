import Cursor from '@/components/cursor/Cursor';
import NavBar from '@/components/navigation/navbar/NavBar';

export interface IPrimaryLayout {
  children: React.ReactNode;
}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({ children }) => {
  return (
    <>
      <Cursor />
      <div className="flex flex-col flex-wrap min-w-screen min-h-screen">
        <NavBar />
        <main className="flex w-full flex-wrap p-2">{children}</main>
      </div>
    </>
  );
};

export default PrimaryLayout;
