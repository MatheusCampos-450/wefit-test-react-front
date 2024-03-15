import React from "react";

import { Product } from "@/@core/domain/entities/product";

import MoreIcon from "@/shared/assets/MoreIcon";
import LessIcon from "@/shared/assets/LessIcon";

import {
  AddOrRemoveItemContainer,
  QuantityText,
  ButtonTransparent,
} from "./styles";
import { useGlobalContext } from "@/shared/context";

interface IAddOrRemoveItemProps {
  productGrouped: Product[];
}

const AddOrRemoveItem = ({ productGrouped }: IAddOrRemoveItemProps) => {
  const { removeProduct, addProduct } = useGlobalContext();

  const product = productGrouped[productGrouped.length - 1];

  return (
    <AddOrRemoveItemContainer>
      <ButtonTransparent
        type="button"
        onClick={() => removeProduct(product.id)}
      >
        <LessIcon className="less-icon" />
      </ButtonTransparent>

      <QuantityText>{productGrouped.length}</QuantityText>

      <ButtonTransparent type="button" onClick={() => addProduct(product)}>
        <MoreIcon className="more-icon" />
      </ButtonTransparent>
    </AddOrRemoveItemContainer>
  );
};

export default AddOrRemoveItem;
