import Cursor from '@/components/cursor/Cursor';

export interface ISplashLayout {
  children: React.ReactNode;
}

const SplashLayout: React.FC<ISplashLayout> = ({ children }) => {
  return (
    <>
      <Cursor />
      <>
        <main className="flex w-screen h-screen border-8 border-[#000] bg-[#000]">
          {children}
        </main>
      </>
    </>
  );
};

export default SplashLayout;
