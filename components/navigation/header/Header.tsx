import Link from 'next/link';

interface IHeader extends React.ComponentPropsWithoutRef<'header'> {}

const Header: React.FC<IHeader> = ({ ...headerProps }) => {
  return (
    <header {...headerProps} className="flex justify-end w-full py-6 border">
      <Link href="/" className="text-theme-gray px-5">
        Home
      </Link>
      <Link href="/about" className="text-theme-gray px-5">
        About
      </Link>
    </header>
  );
};

export default Header;
