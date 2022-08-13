import '../styles/globals.css'
import { AnimatePresence } from "framer-motion"
import Nav from '../components/nav/Nav'
import Head from 'next/head'
import Footer from '../components/footer/Footer';

function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout || EmptyLayout;
  return <AnimatePresence>
    <Head>
      <title>Goge Africa</title>
      <link rel="icon" href="/icons/logo.svg" />
    </Head>
    <Nav />
    <Component {...pageProps} />
    <Footer />
  </AnimatePresence>
}

export default MyApp

const EmptyLayout = ({ children }) => <>{children}</>
