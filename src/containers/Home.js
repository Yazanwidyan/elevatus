import React, { useEffect, useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import axios from "../axios/Axios";
import { Perks } from "../components/Perks";
import AboutUs from "../components/AboutUs";
import Team from "../components/Team";
import Gallery from "../components/Gallery";
import Clients from "../components/Clients";
import Testimonials from "../components/Testimonials";

export const Home = () => {
  const [Data, setData] = useState({});

  return (
    <div>
      <Container>
        <header className="header">
          <Row>
            <Col>
              <div className="header-title"> Welcome to Elevatus</div>
              <div className="header-subTitle">
                Revolutionizing the hiring process
              </div>
            </Col>
          </Row>
        </header>
      </Container>
      <Perks />
      <AboutUs />
      <Clients />
      <Team />
      <Gallery />
      <Testimonials />
    </div>
  );
};
