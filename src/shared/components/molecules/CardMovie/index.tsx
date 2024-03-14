import React from "react";
import Image from "next/image";

import { ProductsProps } from "@/@core/domain/entities/product";

import AddCartIcon from "@/shared/assets/AddCartIcon";

import Button from "../../atoms/Button";
import { ImageWrapper } from "@/shared/styles/ImageContainer";

import { CardMovieContainer, MoviePrice, MovieTitle } from "./styles";
import { formatBrazilianCurrency } from "@/shared/utils/formatBrazilianCurrency";

interface ICardMovieProps {
  product: ProductsProps;
}

const CardMovie: React.FC<ICardMovieProps> = ({ product }) => {
  return (
    <CardMovieContainer>
      <ImageWrapper maxWidth={147}>
        <Image
          src={product.image}
          alt={product.title}
          width={147}
          height={188}
          layout="responsive"
          objectFit="cover"
        />
      </ImageWrapper>

      <MovieTitle>{product.title}</MovieTitle>
      <MoviePrice>{formatBrazilianCurrency(product.price)}</MoviePrice>

      <Button>
        <AddCartIcon className="add-cart-icon" /> 0 ADICIONAR AO CARRINHO
      </Button>
    </CardMovieContainer>
  );
};

export default CardMovie;
