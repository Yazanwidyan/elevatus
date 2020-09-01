import React, { useState, useEffect } from "react";
import axios from "../../axios/Axios";
import { Container } from "react-bootstrap";

const Footer = () => {
  const [Data, setData] = useState({});

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const request = await axios.get("");
    setData(request.data.results.portal.career.website_and_social.data);
  };

  return (
    <div>
      <Container>
        <a href={Data.linkedin_url}>
          <img src="" />
          linkedin
        </a>
      </Container>
    </div>
  );
};

export default Footer;
