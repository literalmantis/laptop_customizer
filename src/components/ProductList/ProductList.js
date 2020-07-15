import React from "react";

import ProductCategory from "../ProductCategory/ProductCategory";

export default function ProductList(props) {
  //variables
  const features = Object.keys(props.features).map((feature, idx) => (
    <ProductCategory {...props} feature={feature} idx={idx} />
  ));

  return features;
}
