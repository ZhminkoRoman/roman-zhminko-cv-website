import Link from 'next/link';

interface INavBar extends React.ComponentPropsWithoutRef<'div'> {}

const NavBar: React.FC<INavBar> = ({ ...NavBarProps }) => {
  return (
    <div {...NavBarProps} className="flex flex-col ">
      <Link href="/" className="text-theme-gray px-5">
        Home
      </Link>
      <Link href="/about" className="text-theme-gray px-5">
        About
      </Link>
    </div>
  );
};

export default NavBar;
