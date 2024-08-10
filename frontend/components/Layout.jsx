import Head from 'next/head';
import { useRouter } from 'next/router';
import Footer from './ui/Footer';
import Navbar from './ui/Navbar';

const Layout = ({ children }) => {
  const router = useRouter();

  // Define routes where you don't want to show the Navbar and Footer
  const noNavFooterRoutes = ['/auth/login', '/auth/register'];

  const shouldRenderNavFooter = !noNavFooterRoutes.includes(router.pathname);

  return (
    <>
      <Head>
        <title>TeklifAL.com</title>
        <meta name='description' content='Firmalardan teklif al..' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {shouldRenderNavFooter && <Navbar />}
      <main>{children}</main>
      {shouldRenderNavFooter && <Footer />}
    </>
  );
};

export default Layout;
