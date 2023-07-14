import React from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const params = useParams();

  return (
    <div>
      <h1>products detail page goes here</h1>
    </div>
  );
};

export default ProductDetails;
