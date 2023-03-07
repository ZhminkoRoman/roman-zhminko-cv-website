import BackgroundStripes from '@/components/backgroundStripes/BackgroundStripes';

export interface ISplashLayout {
  children: React.ReactNode;
}

const SplashLayout: React.FC<ISplashLayout> = ({ children }) => {
  return (
    <>
      {/* <Cursor /> */}
      <main className="flex relative w-screen h-screen bg-[#000]">
        <BackgroundStripes />
        {children}
      </main>
    </>
  );
};

export default SplashLayout;
