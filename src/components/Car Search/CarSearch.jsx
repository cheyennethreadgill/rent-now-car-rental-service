import NavSecondary from "../Global/NavSecondary";
// import Header from "../Home/Header"
import Footer from "../Global/Footer";
import SearchInput from "../Home/SearchInput";
import CarFilter from "./CarFilter";
import PageHeaders from "../Global/PageHeaders";
import { useState } from "react";
import siteImages from "../Global/siteImages";
import CCards from "./CCards";
import pageList from "../Global/pageList";
import productList from "../Products/productList";

function CarSearch() {
  const [searchImg, setsearchImg] = useState(siteImages);
  return (
    <section>
      <NavSecondary />
      <PageHeaders
        src={searchImg[0].img}
        name={pageList[0].name}
      />
      <SearchInput />
      <CarFilter />
      {/* <CCards /> */}
      <Footer />
    </section>
  );
}

export default CarSearch;
