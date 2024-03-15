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
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();

  const { cart } = useGlobalContext();
  const TOTAL_ITEMS = cart.allProducts.length;

  const isHome = router.asPath === "/";
  const isCart = router.asPath === "/cart";

  const redirectToHome = () => router.push("/");

  const redirectToCart = () => router.push("cart");

  return (
    <HeaderContainer>
      <Title isActiveOnClick={!isHome} onClick={redirectToHome}>
        WeMovies
      </Title>

      <CartContainer isActiveOnClick={!isCart} onClick={redirectToCart}>
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
