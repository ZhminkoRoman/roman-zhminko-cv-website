import Cursor from '@/components/cursor/Cursor';
import Header from '@/components/navigation/header/Header';

export interface IPrimaryLayout {
  children: React.ReactNode;
}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="flex px-10 py-5">
        <Cursor />
        {children}
      </main>
    </>
  );
};

export default PrimaryLayout;
