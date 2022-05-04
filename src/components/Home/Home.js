import React from "react";
import FooterInfo from "../FooterInfo/FooterInfo";
import Header from "../Header/Header";
import Movies from "../Movies/Movies";

const Home = ({ query }) => {
  return (
    <div className="home">
      <Header></Header>
      <Movies query={query} />
      <FooterInfo />
    </div>
  );
};

export default Home;
