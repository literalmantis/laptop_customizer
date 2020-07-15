import React from "react";
import CartItem from "../CartItem/CartItem.js";

export default function CartList(props) {
  const summary = Object.keys(props.selected).map((feature, idx) => (
    <CartItem {...props} feature={feature} idx={idx} />
  ));

  return summary;
}
