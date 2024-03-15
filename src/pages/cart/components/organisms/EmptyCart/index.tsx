import React from "react";

import emptyCartDesktop from "@/shared/assets/empty-cart.png";

import {
  ButtonStyled,
  Divisor,
  EmptyCartContainer,
  EmptyCartTitle,
  ImageWrapperStyled,
} from "./styles";
import Image from "next/image";
import { ImageWrapper } from "@/shared/styles/ImageContainer";
import useWindowSize from "@/shared/hooks/useWindowSize";
import { useRouter } from "next/router";

const EmptyCart = () => {
  const router = useRouter();

  const { width } = useWindowSize();

  const redirectToHome = () => router.push("/");

  return (
    <EmptyCartContainer>
      <EmptyCartTitle>Parece que não há nada por aqui :(</EmptyCartTitle>

      {width && width > 575 ? (
        <ImageWrapper maxWidth={447}>
          <Image
            src={emptyCartDesktop.src}
            alt="cart empty"
            width={447}
            height={264}
            layout="responsive"
            objectFit="cover"
          />
        </ImageWrapper>
      ) : (
        <ImageWrapperStyled>
          <Image
            src={emptyCartDesktop.src}
            alt="cart empty"
            width={447}
            height={264}
            layout="responsive"
            objectFit="cover"
          />
        </ImageWrapperStyled>
      )}

      <Divisor />

      <ButtonStyled type="button" onClick={redirectToHome}>
        VOLTAR
      </ButtonStyled>
    </EmptyCartContainer>
  );
};

export default EmptyCart;
