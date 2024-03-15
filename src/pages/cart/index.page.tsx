import React from "react";

// import useWindowSize from "@/shared/hooks/useWindowSize";

import CartDesktop from "./components/organisms/CartDesktop";

import { CartContainer } from "./styles";

const Cart = () => {
  // const { width } = useWindowSize();

  return (
    <CartContainer>
      <CartDesktop />
    </CartContainer>
  );
};

export default Cart;
