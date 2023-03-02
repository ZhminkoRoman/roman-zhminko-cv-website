import Link from 'next/link';
import { useEffect, useState } from 'react';

const BUTTON_TITLE = 'PRESS START';

const StartNavigationLink = () => {
  const [buttonTitle, setButtonTitle] = useState('');

  useEffect(() => {
    const buttonBlinkInterval = setInterval(() => {
      if (buttonTitle) {
        setButtonTitle('');
      } else {
        setButtonTitle(BUTTON_TITLE);
      }
    }, 250);
    return () => clearInterval(buttonBlinkInterval);
  }, [buttonTitle]);

  return (
    <div className="flex items-center blur-[2px] justify-center relative min-h-[200px] h-[200px] w-[1000px]">
      <Link href="/home" className="retroText">
        {buttonTitle}
      </Link>
      {buttonTitle && (
        <div className="absolute rounded-full blur-3xl bg-blend-screen w-[900px] h-[240px] bg-[#6acfff]/[0.1]" />
      )}
    </div>
  );
};

export default StartNavigationLink;
