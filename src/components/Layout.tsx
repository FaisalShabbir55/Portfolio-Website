import { ReactNode } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import './Layout.css';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="layout">
      <Navigation />
      <main className="main-content">{children}</main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Layout;

