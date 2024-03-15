import React from "react";
import { useRouter } from "next/router";

import { formatBrazilianCurrency } from "@/shared/utils/formatBrazilianCurrency";

import { useGlobalContext } from "@/shared/context";

import CartItem from "./components/organisms/CartItem";
import EmptyCart from "./components/organisms/EmptyCart";

import {
  CartContainer,
  Header,
  ColumnTitle,
  Footer,
  FooterTextContainer,
  FooterTotalPrice,
  FooterTotalTitle,
  ButtonStyled,
  CartItemsWrapper,
} from "./styles";

const CartDesktop = () => {
  const router = useRouter();

  const { cart, clearCart } = useGlobalContext();

  const PRODUTS_TO_RENDER = cart.productsSubtotal;

  if (!PRODUTS_TO_RENDER.length) return <EmptyCart />;

  const redirectToCheckoutSuccess = () => {
    router.push("/checkout/success");
    clearCart();
  };

  return (
    <CartContainer>
      <Header>
        <ColumnTitle>PRODUTO</ColumnTitle>
        <ColumnTitle>QTD</ColumnTitle>
        <ColumnTitle>SUBTOTAL</ColumnTitle>
      </Header>

      <CartItemsWrapper>
        {PRODUTS_TO_RENDER.map((product, key) => (
          <CartItem key={key} product={product} />
        ))}
      </CartItemsWrapper>

      <Footer>
        <ButtonStyled type="button" onClick={redirectToCheckoutSuccess}>
          FINALIZAR PEDIDO
        </ButtonStyled>

        <FooterTextContainer>
          <FooterTotalTitle>TOTAL</FooterTotalTitle>

          <FooterTotalPrice>
            {formatBrazilianCurrency(cart.total)}
          </FooterTotalPrice>
        </FooterTextContainer>
      </Footer>
    </CartContainer>
  );
};

export default CartDesktop;
