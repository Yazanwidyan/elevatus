import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import Axios from "../../axios/Axios";

export const NavBar = () => {
  const [Data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const request = await Axios.get("");
    setData(request.data.results.portal.career.appearance.data.colors);
  };

  const color = Data.theme;

  const [scroll, setScroll] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 100) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  window.addEventListener("scroll", changeBackground);

  return (
    <Container>
      <Navbar
        className="navbar"
        style={
          scroll
            ? { backgroundColor: color }
            : { backgroundColor: "transparent" }
        }
      >
        <Container>
          <Navbar.Brand href="#home">Logo</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Perks</Nav.Link>
            <Nav.Link href="#features">Gallery</Nav.Link>
            <Nav.Link href="#pricing">Jobs</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </Container>
  );
};
