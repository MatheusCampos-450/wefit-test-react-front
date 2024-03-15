import React from "react";
import Image from "next/image";

import { ICartItemProps } from "@/pages/cart/types";

import { formatBrazilianCurrency } from "@/shared/utils/formatBrazilianCurrency";

import { useGlobalContext } from "@/shared/context";

import TrashIcon from "@/shared/assets/TrashIcon";
import { ImageWrapper } from "@/shared/styles/ImageContainer";

import AddOrRemoveItem from "../../atoms/AddOrRemoveItem";
import { ButtonTransparent } from "../../organisms/CartItem/styles/ButtonTransparent";

import {
  CartItemDesktopContainer,
  ColumnContainer,
  ProductInfo,
  ProductPrice,
  ProductTitle,
  SubTotalContainer,
} from "./styles";

const CartItemDesktop = ({ product }: ICartItemProps) => {
  const { cart, clearProduct } = useGlobalContext();

  const PRODUCT_GROUPED = cart.allProducts.filter(
    (item) => item.title === product.title,
  );

  const SUBTOTAL = PRODUCT_GROUPED.length * product.price;

  return (
    <CartItemDesktopContainer>
      <ColumnContainer>
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
      </ColumnContainer>

      <ColumnContainer>
        <AddOrRemoveItem productGrouped={PRODUCT_GROUPED} />
      </ColumnContainer>

      <SubTotalContainer>
        <ProductPrice>{formatBrazilianCurrency(SUBTOTAL)}</ProductPrice>

        <ButtonTransparent
          type="button"
          onClick={() => clearProduct(product.title)}
        >
          <TrashIcon />
        </ButtonTransparent>
      </SubTotalContainer>
    </CartItemDesktopContainer>
  );
};

export default CartItemDesktop;
