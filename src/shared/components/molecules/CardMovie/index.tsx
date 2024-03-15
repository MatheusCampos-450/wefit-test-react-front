import React from "react";
import Image from "next/image";

import { useGlobalContext } from "@/shared/context";
import { formatBrazilianCurrency } from "@/shared/utils/formatBrazilianCurrency";

import { Product, ProductsProps } from "@/@core/domain/entities/product";

import AddCartIcon from "@/shared/assets/AddCartIcon";

import { ImageWrapper } from "@/shared/styles/ImageContainer";

import {
  CardMovieContainer,
  MoviePrice,
  MovieTitle,
  ButtonStyled,
} from "./styles";

interface ICardMovieProps {
  product: ProductsProps;
}

const CardMovie: React.FC<ICardMovieProps> = ({ product }) => {
  const productEntity = new Product({ ...product });

  const { cart, addProduct } = useGlobalContext();

  const onClick = () => {
    console.log("onClick");
    addProduct(productEntity);
  };

  const total = cart.products.filter(
    (product) => product.title === productEntity.title,
  ).length;

  return (
    <CardMovieContainer>
      <ImageWrapper maxWidth={147}>
        <Image
          src={productEntity.image}
          alt={productEntity.title}
          width={147}
          height={188}
          layout="responsive"
          objectFit="cover"
        />
      </ImageWrapper>

      <MovieTitle>{productEntity.title}</MovieTitle>
      <MoviePrice>{formatBrazilianCurrency(productEntity.price)}</MoviePrice>

      <ButtonStyled type="button" onClick={onClick} isActive={!!total}>
        <AddCartIcon className="add-cart-icon" /> {total} ADICIONAR AO CARRINHO
      </ButtonStyled>
    </CardMovieContainer>
  );
};

export default CardMovie;
