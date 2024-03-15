import React from "react";
import Image from "next/image";

import { ICartItemProps } from "@/pages/cart/types";

import { formatBrazilianCurrency } from "@/shared/utils/formatBrazilianCurrency";

import { useGlobalContext } from "@/shared/context";

import TrashIcon from "@/shared/assets/TrashIcon";

import AddOrRemoveItem from "../../atoms/AddOrRemoveItem";
import { ButtonTransparent } from "../../organisms/CartItem/styles/ButtonTransparent";

import {
  CartItemMobileContainer,
  ColumnContainer,
  ProductPrice,
  ProductInfoContainer,
  ProductTitle,
  SubTotalContainer,
  ProductSubtotalContainer,
  ProductSubtotal,
} from "./styles";

const CartItemMobile = ({ product }: ICartItemProps) => {
  const { cart, clearProduct } = useGlobalContext();

  const PRODUCT_GROUPED = cart.allProducts.filter(
    (item) => item.title === product.title,
  );

  const SUBTOTAL = PRODUCT_GROUPED.length * product.price;

  return (
    <CartItemMobileContainer>
      <ColumnContainer>
        <Image src={product.image} alt={product.title} width={64} height={82} />

        <ProductInfoContainer>
          <ProductTitle>{product.title}</ProductTitle>

          <AddOrRemoveItem productGrouped={PRODUCT_GROUPED} />
        </ProductInfoContainer>
      </ColumnContainer>

      <SubTotalContainer>
        <ProductPrice>
          {formatBrazilianCurrency(product.price)}

          <ButtonTransparent
            className="button-transparent"
            type="button"
            onClick={() => clearProduct(product.title)}
          >
            <TrashIcon />
          </ButtonTransparent>
        </ProductPrice>

        <ProductSubtotalContainer>
          <ProductSubtotal>SUBTOTAL</ProductSubtotal>

          <ProductPrice>{formatBrazilianCurrency(SUBTOTAL)}</ProductPrice>
        </ProductSubtotalContainer>
      </SubTotalContainer>
    </CartItemMobileContainer>
  );
};

export default CartItemMobile;
