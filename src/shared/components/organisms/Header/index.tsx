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

const Header = () => {
  return (
    <HeaderContainer>
      <Title>WeMovies</Title>

      <CartContainer>
        <CartTextContainer>
          <CartTitle>Meu Carrinho</CartTitle>

          <CartItems>0 itens</CartItems>
        </CartTextContainer>

        <CartIcon />
      </CartContainer>
    </HeaderContainer>
  );
};

export default Header;
