import React from "react";
import Image from "next/image";

import { ICartItemProps } from "@/pages/cart/types";

import { ImageWrapper } from "@/shared/styles/ImageContainer";
import { formatBrazilianCurrency } from "@/shared/utils/formatBrazilianCurrency";

import { useGlobalContext } from "@/shared/context";

import {
  CartItemDesktopContainer,
  ProductContainer,
  ProductInfo,
  ProductPrice,
  ProductTitle,
  SubTotalContainer,
  QTDContainer,
} from "./styles";
import AddOrRemoveItem from "../../atoms/AddOrRemoveItem";

const CartItemDesktop = ({ product }: ICartItemProps) => {
  const { cart } = useGlobalContext();

  const PRODUCT_GROUPED = cart.allProducts.filter(
    (item) => item.title === product.title,
  );

  const SUBTOTAL = PRODUCT_GROUPED.length * product.price;

  return (
    <CartItemDesktopContainer>
      <ProductContainer>
        <ImageWrapper maxWidth={91}>
          <Image
            src={product.image}
            alt={product.title}
            width={91}
            height={114}
            layout="responsive"
            objectFit="cover"
          />
        </ImageWrapper>

        <ProductInfo>
          <ProductTitle>{product.title}</ProductTitle>
          <ProductPrice>{formatBrazilianCurrency(product.price)}</ProductPrice>
        </ProductInfo>
      </ProductContainer>

      <QTDContainer>
        <AddOrRemoveItem productGrouped={PRODUCT_GROUPED} />
      </QTDContainer>

      <SubTotalContainer>
        <ProductPrice>{formatBrazilianCurrency(SUBTOTAL)}</ProductPrice>
      </SubTotalContainer>
    </CartItemDesktopContainer>
  );
};

export default CartItemDesktop;
