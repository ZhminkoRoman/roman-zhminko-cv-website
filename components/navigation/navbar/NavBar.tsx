import Link from 'next/link';

interface INavBar extends React.ComponentPropsWithoutRef<'div'> {}

const NavBar: React.FC<INavBar> = ({ ...NavBarProps }) => {
  return (
    <div
      {...NavBarProps}
      className="flex h-screen items-center justify-center "
    >
      <div className="flex px-40 flex-col border-r-2 border-theme-gray">
        <Link href="/" className="btn-navigation">
          Home page
          <span className="btn-underline"></span>
        </Link>
        <Link href="/about" className="btn-navigation">
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
