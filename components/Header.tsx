import Image from 'next/image';
import Link from 'next/link';
import NavItems from './NavItems';
import UserDropdown from './UserDropdown';

function Header() {
  return (
    <header className="sticky top-0 header">
      <div className="container header-wrapper">
        <Link href="/">
          <Image
            className="h-8 w-auto cursor-pointer"
            src="/assets/icons/logo.svg"
            alt="Stockify logo"
            width={140}
            height={32}
          />
        </Link>
        <nav className="hidden sm:block">
          {/* nav items */}
          <NavItems />
        </nav>
        {/* user dropdown menu */}
        <UserDropdown />
      </div>
    </header>
  );
}

export default Header;
