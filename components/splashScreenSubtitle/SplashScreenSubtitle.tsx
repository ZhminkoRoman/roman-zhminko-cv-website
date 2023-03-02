const SplashScreenSubtitle = () => {
  // const [buttonTitle, setButtonTitle] = useState('');

  // useEffect(() => {
  //   const buttonBlinkInterval = setInterval(() => {
  //     if (buttonTitle) {
  //       setButtonTitle('');
  //     } else {
  //       setButtonTitle(BUTTON_TITLE);
  //     }
  //   }, 250);
  //   return () => clearInterval(buttonBlinkInterval);
  // }, [buttonTitle]);

  return (
    <div className="flex items-center blur-[2px] justify-center relative min-h-[80px] h-[80px] w-[1000px]">
      <div className="absolute rounded-full blur-3xl bg-blend-screen w-[1000px] h-[200px] bg-[#6acfff]/[0.1]" />
      <p className="retroSubText">Insert a coin to continue</p>
    </div>
  );
};

export default SplashScreenSubtitle;
