import React from "react";

import { CartDesktopContainer, Header, ColumnTitle } from "./styles";
import { useGlobalContext } from "@/shared/context";
import CartItemDesktop from "../../molecules/CartItemDesktop";

const CartDesktop = () => {
  const { cart } = useGlobalContext();

  const PRODUTS_TO_RENDER = cart.productsSubtotal;

  return (
    <CartDesktopContainer>
      <Header>
        <ColumnTitle>PRODUTO</ColumnTitle>
        <ColumnTitle>QTD</ColumnTitle>
        <ColumnTitle>SUBTOTAL</ColumnTitle>
      </Header>

      {PRODUTS_TO_RENDER.map((product) => (
        <CartItemDesktop key={product.id} product={product} />
      ))}
    </CartDesktopContainer>
  );
};

export default CartDesktop;
