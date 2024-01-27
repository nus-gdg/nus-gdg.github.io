import NavBar from './components/NavBar';
import Footer from './components/Footer';

import Header from './components/HomePage/Header';
import Activities from './components/HomePage/Activities';
import Portfolio from './components/HomePage/Portfolio';
import Events from './components/HomePage/Events';

export default function Home() {
  return (
    <>
      <NavBar />
      <Header />
      <Activities />
      <Portfolio />
      <Events />
      <Footer />
    </>
  );
}
