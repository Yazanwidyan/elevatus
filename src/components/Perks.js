import React, { useEffect, useState } from "react";
import Axios from "../axios/Axios";
import Slider from "react-slick";
import { Container } from "react-bootstrap";

export const Perks = () => {
  const [Data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const request = await Axios.get("");
    setData(request.data.results.portal.career.perk.data);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };

  return (
    <div>
      <Container>
        <Slider {...settings}>
          {Data.map((item) => (
            <div>
              <img className="team-img" src={item.url} />
              <h3>{item.name}</h3>
            </div>
          ))}
        </Slider>
      </Container>
    </div>
  );
};
