import React from "react";
import Carousel from "react-bootstrap/Carousel";
import homeBG1 from "./homeImage/homeBG1.jpeg";
import homeBG2 from "./homeImage/homeBG2.jpeg";
import homeBG3 from "./homeImage/homeBG3.jpeg";

import "./Home.css";
const Home = () => {
  return (
    <React.Fragment>
      <Carousel data-bs-theme="light">
        <Carousel.Item>
          <img className="d-block w-100" src={homeBG1} alt="First slide" />
          <Carousel.Caption>
            <h1>One stop for Shopping</h1>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={homeBG2} alt="Second slide" />
          <Carousel.Caption>
            <h1>Designs customized for you</h1>
            <p>Lorem sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={homeBG3} alt="Third slide" />
          <Carousel.Caption>
            <h1>Exciting offers ahead</h1>
            <p>
              Praesent commodo cursus magna, scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </React.Fragment>
  );
};

export default Home;
