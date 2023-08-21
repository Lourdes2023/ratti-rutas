import React from "react";
import { useParams } from "react-router-dom";

const Product = () => {
  const { Product } = useParams();

  return (
    <div style={{ marginTop: "17vh" }}>
      <h1>Servicio de : {Product}</h1>
    </div>
  );
};

export default Product;
