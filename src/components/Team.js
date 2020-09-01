import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import { useEffect } from "react";
import Axios from "../axios/Axios";
import { Container } from "react-bootstrap";

const Team = () => {
  const [Data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const request = await Axios.get("");
    setData(request.data.results.portal.career.employee.data);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
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
    <div className="team-wrapper">
      <Container>
        <Slider {...settings}>
          {Data.map((item) => (
            <div>
              <img className="team-img" src={item.media.url} />
              <h3 className="team-name">{item.name}</h3>
            </div>
          ))}
        </Slider>
      </Container>
    </div>
  );
};

export default Team;
