import Cursor from '@/components/cursor/Cursor';
import NavBar from '@/components/navigation/navbar/NavBar';

export interface IPrimaryLayout {
  children: React.ReactNode;
}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({ children }) => {
  return (
    <>
      <Cursor />
      <div className="flex flex-row min-w-screen items-center min-h-screen">
        <NavBar />
        <main className="flex w-full items-center justify-center">
          {children}
        </main>
      </div>
    </>
  );
};

export default PrimaryLayout;
