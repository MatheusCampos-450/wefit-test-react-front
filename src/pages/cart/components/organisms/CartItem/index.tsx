import React from "react";

import useWindowSize from "@/shared/hooks/useWindowSize";

import CartItemDesktop from "../../molecules/CartItemDesktop";

import { ICartItemProps } from "@/pages/cart/types";
import CartItemMobile from "../../molecules/CartItemMobile";

const CartItem = ({ product }: ICartItemProps) => {
  const { width } = useWindowSize();

  if (width && width >= 575) return <CartItemDesktop product={product} />;

  return <CartItemMobile product={product} />;
};

export default CartItem;
