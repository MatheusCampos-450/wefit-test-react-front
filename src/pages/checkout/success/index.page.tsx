import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import checkoutSuccess from "@/shared/assets/checkout-success.png";

import useWindowSize from "@/shared/hooks/useWindowSize";

import { ImageWrapper } from "@/shared/styles/ImageContainer";

import {
  ButtonStyled,
  CheckoutSuccessContainer,
  CheckoutSuccessTitle,
  ImageWrapperStyled,
} from "./styles";

const CheckoutSuccess = () => {
  const router = useRouter();

  const { width } = useWindowSize();

  const redirectToHome = () => router.push("/");

  return (
    <CheckoutSuccessContainer>
      <CheckoutSuccessTitle>Compra realizada com sucesso!</CheckoutSuccessTitle>

      {width && width > 575 ? (
        <ImageWrapper maxWidth={447}>
          <Image
            src={checkoutSuccess.src}
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
            src={checkoutSuccess.src}
            alt="cart empty"
            width={447}
            height={264}
            layout="responsive"
            objectFit="cover"
          />
        </ImageWrapperStyled>
      )}

      <ButtonStyled type="button" onClick={redirectToHome}>
        VOLTAR
      </ButtonStyled>
    </CheckoutSuccessContainer>
  );
};

export default CheckoutSuccess;
