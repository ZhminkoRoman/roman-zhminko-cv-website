export interface ISplashLayout {
  children: React.ReactNode;
}

const SplashLayout: React.FC<ISplashLayout> = ({ children }) => {
  return (
    <>
      {/* <Cursor /> */}
      <>
        <main className="flex w-screen h-screen bg-[#000]">{children}</main>
      </>
    </>
  );
};

export default SplashLayout;
