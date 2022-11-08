import React from "react";
import Hero from "../components/hero/Hero";
import Benefits from "../components/benefits/Benefits";
import Product from "../components/product/Product";
import Advantages from "../components/advantages/Advantages";
import Testimonials from "../components/testimonials/Testimonials";
import Articles from "../components/articles/Articles";

const Home = () => {
  return (
    <div>
      <Hero />
      <Benefits />
      {/* <Product /> */}
      <Advantages />
      <Testimonials />
      <Articles />
    </div>
  );
};

export default Home;
