import Link from 'next/link';

interface IHeader extends React.ComponentPropsWithoutRef<'header'> {}

const Header: React.FC<IHeader> = ({ ...headerProps }) => {
  return (
    <header {...headerProps}>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
    </header>
  );
};

export default Header;
