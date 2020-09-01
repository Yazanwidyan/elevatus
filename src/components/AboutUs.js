import React, { useState, useEffect } from "react";
import Axios from "../axios/Axios";
import { Container } from "react-bootstrap";

const AboutUs = () => {
  const [Data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const request = await Axios.get("");
    setData(request.data.results.portal.career.about_us.data);
  };

  return (
    <div className="aboutUs-wrapper">
      <Container>
        <div className="about-title">About Us</div>
        <div className="about-split">
          <div className="about__left">
            <iframe
              allow
              src="https://www.youtube.com/watch?v=m1Y_lLGzBmo"
              title="s"
            />
          </div>
          <div className="about__right">{Data.description}</div>
        </div>
      </Container>
    </div>
  );
};

export default AboutUs;
