import React from "react";

import Product from "../Product/Product";

export default function ProductCategory(props) {
  const featureHash = props.feature + "-" + props.idx;
  const options = props.features[props.feature].map((item) => (
    <Product {...props} item={item} />
  ));

  return (
    <fieldset className="feature" key={featureHash}>
      <legend className="feature__name">
        <h3>{props.feature}</h3>
      </legend>
      {options}
    </fieldset>
  );
}
