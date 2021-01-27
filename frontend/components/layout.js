import Logo from '../assets/NanoGiants.svg';
import Logout from '../assets/Icon.svg';
import Link from 'next/link';
import { useAuth } from '../contexts/auth';

const Layout = ({ children }) => {
  const { logout } = useAuth();
  return (
    <div>
      <nav className="container p-3 bg-white flex justify-between items-center shadow-sm">
        <Link href="/dashboard">
          <Logo />
        </Link>
        <button onClick={() => logout()}>
          <Logout />
        </button>
      </nav>
      <main className="bg-microBlue h-screen">{children}</main>
    </div>
  );
};

export default Layout;
