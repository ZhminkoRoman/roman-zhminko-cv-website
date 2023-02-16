import Link from 'next/link';
import { useState } from 'react';

const StartNavigationLink = () => {
  const [buttonKey, setButtonKey] = useState('ENTER');
  const [action, setAction] = useState('watch');
  const [aim, setAim] = useState('CV');

  // useEffect(() => {
  //   const aimBlinkInterval = setInterval(() => {
  //     setAim('TV');
  //   }, 10000);
  //   return () => clearInterval(aimBlinkInterval);
  // }, []);

  return (
    <>
      <Link
        href="/home"
        className="text-3xl text-theme-white"
        // replace={true}
      >
        Press {buttonKey} to {action} {aim}
      </Link>
    </>
  );
};

export default StartNavigationLink;
