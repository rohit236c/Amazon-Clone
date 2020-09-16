import React from 'react';
// import Prime from './images/img_two.jpg';
import './Home.css';
import Product from './Product';
function Home() {
    return (
        <div className="home">
            {/* Add an image */}
            <img
                className="home__img"
                alt=""
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"/>
            <Product title="hello world" price="500" rating={5} image = "https://assets.entrepreneur.com/content/3x2/2000/20191219170611-GettyImages-1152794789.jpeg?width=700&crop=2:1"/>
        </div>
    )
};

export default Home;
