import Link from 'next/link';

interface INavBar extends React.ComponentPropsWithoutRef<'div'> {}

const NavBar: React.FC<INavBar> = ({ ...NavBarProps }) => {
  return (
    <div {...NavBarProps} className="w-full">
      <div className="flex border-b-2 border-theme-gray">
        <Link href="/home" className="btn-navigation">
          About me
          <span className="btn-underline"></span>
        </Link>
        <Link href="/tech" className="btn-navigation">
          Technologies
          <span className="btn-underline"></span>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
