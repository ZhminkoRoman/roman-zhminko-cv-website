import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const BUTTON_TITLE = 'PRESS START';

const StartNavigationLink = () => {
  const router = useRouter();
  const [buttonTitle, setButtonTitle] = useState('');
  const [buttonPressed, setButtonPressed] = useState(false);

  const handleButtonTitle = (title: string) => {
    if (title) {
      setButtonTitle('');
    } else {
      setButtonTitle(BUTTON_TITLE);
    }
  };

  useEffect(() => {
    const buttonBlinkInterval = setInterval(
      () => {
        handleButtonTitle(buttonTitle);
      },
      buttonPressed ? 150 : 300
    );
    return () => clearInterval(buttonBlinkInterval);
  }, [buttonTitle, buttonPressed]);

  const handleEnterPress = (event: KeyboardEvent) => {
    if (event.key === 'Enter') {
      setButtonPressed(true);
      setTimeout(() => {
        router.push('/home');
      }, 3000);
    }
  };

  useEffect(() => {
    window.addEventListener('keypress', handleEnterPress);
    return () => window.removeEventListener('keypress', handleEnterPress);
  });

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
