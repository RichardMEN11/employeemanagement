import Logo from '../assets/NanoGiants.svg';
import Logout from '../assets/Icon.svg';

const Layout = ({ children }) => {
  return (
    <>
      <nav className="container p-3 bg-white flex justify-between items-center shadow-sm">
        <Logo />
        <Logout />
      </nav>
      <main className="bg-microBlue h-screen">{children}</main>
    </>
  );
};

export default Layout;
