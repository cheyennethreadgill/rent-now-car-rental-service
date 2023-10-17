import React from 'react';
import WhyUs from './WhyUs';
import Navigation from '../Global/Navigation/Navigation';
import Header from './Header';
import SearchInput from './SearchInput';
import Footer from '../Global/Footer';
import PopularCars from './PopularCars';

const Home = () => {
  return (
    <section className='position-relative home'>
      <Navigation />
      <Header />
      <SearchInput />
      <WhyUs />
      <PopularCars />
      <Footer />
    </section>
  );
};

export default Home;
