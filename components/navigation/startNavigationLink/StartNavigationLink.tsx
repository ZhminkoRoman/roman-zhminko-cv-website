import Link from 'next/link';
import { useState } from 'react';

const StartNavigationLink = () => {
  const [buttonKey, setButtonKey] = useState('ENTER');
  const [action, setAction] = useState('watch');
  const [aim, setAim] = useState('CV');

  return (
    <>
      <Link href="/home" replace={true}>
        Press {buttonKey} to {action} {aim}
      </Link>
    </>
  );
};

export default StartNavigationLink;
