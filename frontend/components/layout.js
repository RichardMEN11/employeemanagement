import Logo from '../assets/NanoGiants.svg';
import Logout from '../assets/Icon.svg';

const Layout = ({ children }) => {
  return (
    <div>
      <nav className="container p-3 bg-white flex justify-between items-center shadow-sm">
        <Logo />
        <Logout />
      </nav>
      <main className="bg-microBlue h-screen">{children}</main>
    </div>
  );
};

export default Layout;
