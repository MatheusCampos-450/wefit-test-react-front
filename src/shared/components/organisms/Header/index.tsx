import React from "react";

import {
  CartContainer,
  CartItems,
  CartTextContainer,
  CartTitle,
  HeaderContainer,
  Title,
} from "./styles";
import CartIcon from "@/shared/assets/CartIcon";
import { useGlobalContext } from "@/shared/context";

const Header = () => {
  const { cart } = useGlobalContext();

  const TOTAL_ITEMS = cart.products.length;

  return (
    <HeaderContainer>
      <Title>WeMovies</Title>

      <CartContainer>
        <CartTextContainer>
          <CartTitle>Meu Carrinho</CartTitle>

          <CartItems>{TOTAL_ITEMS} itens</CartItems>
        </CartTextContainer>

        <CartIcon />
      </CartContainer>
    </HeaderContainer>
  );
};

export default Header;
