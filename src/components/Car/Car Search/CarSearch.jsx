import React from 'react';
import Navigation from '../../Global/Navigation/Navigation';
import Footer from '../../Global/Footer';
import SearchInput from '../../Home/SearchInput';
import CarFilter from './CarFilter';
import PageHeaders from '../../Global/PageHeaders';
import siteImages from '../../data/siteImages';
import pageList from '../../data/pageList';

const CarSearch = () => {
  return (
    <section>
      <Navigation />
      <PageHeaders
        src={siteImages[0].img}
        name={pageList[0].name}
      />
      <SearchInput />
      <CarFilter />
      <Footer />
    </section>
  );
};

export default CarSearch;
