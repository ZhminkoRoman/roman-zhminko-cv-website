import Cursor from '@/components/cursor/Cursor';
import NavBar from '@/components/navigation/navbar/NavBar';

export interface IPrimaryLayout {
  children: React.ReactNode;
}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({ children }) => {
  return (
    <>
      <Cursor />
      <>
        <main className="altScreen screenBorder flex-col">
          <NavBar />
          {children}
        </main>
      </>
    </>
  );
};

export default PrimaryLayout;
