import React, { useState, useEffect } from "react";
import axios from "../axios/Axios";
import { Container } from "react-bootstrap";

const Gallery = () => {
  const [Data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const request = await axios.get("");
    setData(request.data.results.portal.career.gallery.data);
  };

  return (
    <div className="gallery-wrapper">
      <Container>
        {Data.map((item) => (
          <img className="gallery-img" src={item.url} />
        ))}
      </Container>
    </div>
  );
};

export default Gallery;
