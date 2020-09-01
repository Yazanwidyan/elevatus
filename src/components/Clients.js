import React, { useState, useEffect } from "react";
import axios from "../axios/Axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Container } from "react-bootstrap";

const Clients = () => {
  const [Data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const request = await axios.get("");
    setData(request.data.results.portal.career.client.data);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="client-wrapper">
      <Container>
        <Slider {...settings}>
          {Data.map((item) => (
            <div>
              <img className="client-img" src={item.url} />
              <h3>{item.name}</h3>
            </div>
          ))}
        </Slider>
      </Container>
    </div>
  );
};

export default Clients;
