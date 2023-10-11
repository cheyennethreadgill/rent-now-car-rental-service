import Navigation from '../../Global/Navigation/Navigation';
import Footer from '../../Global/Footer';
import SearchInput from '../../Home/SearchInput';
import CarFilter from './Filter';
import PageHeaders from '../../Global/PageHeaders';
import { useState } from 'react';
import siteImages from '../../data/siteImages';
import pageList from '../../data/pageList';

function CarSearch() {
  const [searchImg, setsearchImg] = useState(siteImages);
  return (
    <section>
      <Navigation />
      <PageHeaders
        src={searchImg[0].img}
        name={pageList[0].name}
      />
      <SearchInput />
      <CarFilter />
      <Footer />
    </section>
  );
}

export default CarSearch;
