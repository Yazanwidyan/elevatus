import React, { useState, useEffect } from "react";
import axios from "../axios/Axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Container } from "react-bootstrap";

const Testimonials = () => {
  const [Data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const request = await axios.get("");
    setData(request.data.results.portal.career.testimonial.data);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="testimonials-wrapper">
      <Container>
        <div>What's like to work here? The feedback of our happy clients</div>

        <Slider {...settings}>
          {Data.map((item) => (
            <div>
              <img src={item.media.url} />
              <h3>{item.name}</h3>
            </div>
          ))}
        </Slider>
      </Container>
    </div>
  );
};

export default Testimonials;
