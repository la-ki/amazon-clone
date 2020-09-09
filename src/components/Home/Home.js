import React from "react";
import "./Home.css";
import Product from "../Product/Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
          id="123451"
            title="DualShock 4 Wireless Controller for PlayStation 4 - Magma Red"
            price={12.99}
            image="https://images-na.ssl-images-amazon.com/images/I/81L9%2B4dTIgL._SL1500_.jpg"
            rating={5} />
          <Product
            id="14571"
            title="Blendtec Total Classic Original Blender - WildSide+ Jar (90 oz) - Professional-Grade Power - 6 Pre-programmed Cycles - 10-speeds - Black (Renewed)"
            price={154.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/31znGMx%2B9FL._AC_.jpg"
          />
        </div>
        <div className="home__row">
          <Product 
            id="13547"
            title="Samsung LC65RG90SSUXEN 65' Curved LED Gaming Monitor"
            price={950.25}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Product
            id="454545"
            title="Victrola Vintage 3-Speed Bluetooth Portable Suitcase Record Player with Built-in Speakers"
            price={44.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/716pgZxRYhL._AC_SL1395_.jpg"
          />
          <Product 
            id="4154545"
            title="AmazonBasics Small Digital Alarm Clock with Nightlight and Battery Backup, LED Display"
            price={9.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/61j17FjPhtL._AC_SL1500_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="445445"
            title="LG 50UN7300PUF Alexa Built-In 50 4K Ultra HD Smart LED TV (2020)"
            price={1289.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/81RMDc4CWYL._AC_SL1500_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
