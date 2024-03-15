import { AddProductInCartUseCase } from "@/@core/application/cart/add-product-in-cart.use-case";
import { ClearCartUseCase } from "@/@core/application/cart/clear-cart.use-case";
import { ClearProductCartUseCase } from "@/@core/application/cart/clear-product-cart.use-case";
import { GetCartUseCase } from "@/@core/application/cart/get-cart.use-case";
import { RemoveProductFromCartUseCase } from "@/@core/application/cart/remove-product-from-cart.use-case";
import { Cart } from "@/@core/domain/entities/cart";
import { Product } from "@/@core/domain/entities/product";
import { Registry, container } from "@/@core/infra/container-registry";
import { createContext, useContext, useEffect, useState } from "react";

const getCartUseCase = container.get<GetCartUseCase>(Registry.GetCartUseCase);
const addProducInCartUseCase = container.get<AddProductInCartUseCase>(
  Registry.AddProductInCartUseCase,
);
const removeProducFromCartUseCase = container.get<RemoveProductFromCartUseCase>(
  Registry.RemoveProductFromCartUseCase,
);
const clearProductCartUseCase = container.get<ClearProductCartUseCase>(
  Registry.ClearProductCartUseCase,
);
const clearCartUseCase = container.get<ClearCartUseCase>(
  Registry.ClearCartUseCase,
);

interface IGlobalContext {
  cart: Cart;
  addProduct: (product: Product) => void;
  removeProduct: (productId: string) => void;
  clearProduct: (productTitle: string) => void;
  clearCart: () => void;
}

const defaultContext: IGlobalContext = {
  cart: new Cart({ products: [] }),
  addProduct: () => {},
  removeProduct: () => {},
  clearProduct: () => {},
  clearCart: () => {},
};

const GlobalContext = createContext(defaultContext);

interface IGlobalContextProvider {
  children: React.ReactNode;
}

export const GlobalContextProvider = ({ children }: IGlobalContextProvider) => {
  const [cart, setCart] = useState<Cart>(defaultContext.cart);

  const addProduct = (product: Product) => {
    console.log(product, "addProduct");

    const cart = addProducInCartUseCase.execute(product);
    setCart(cart);
  };

  const removeProduct = (productId: string) => {
    const cart = removeProducFromCartUseCase.execute(productId);
    setCart(cart);
  };

  const clearProduct = (productTitle: string) => {
    const cart = clearProductCartUseCase.execute(productTitle);
    setCart(cart);
  };

  const clearCart = () => {
    const cart = clearCartUseCase.execute();
    setCart(cart);
  };

  const reload = () => {
    const cart = getCartUseCase.execute();
    setCart(cart);
  };

  useEffect(() => {
    reload();
  }, []);

  return (
    <GlobalContext.Provider
      value={{ cart, addProduct, removeProduct, clearProduct, clearCart }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);

  if (!context || Object.keys(context).length === 0) {
    throw new Error(
      "useGlobalContext must be used within a GlobalContextProvider",
    );
  }

  return context;
};
