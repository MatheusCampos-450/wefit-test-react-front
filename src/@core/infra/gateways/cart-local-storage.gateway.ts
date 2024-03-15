import { injectable } from "inversify";
import { Cart } from "@/@core/domain/entities/cart";
import { CartGateway } from "@/@core/domain/gateways/cart.gateway";

import { Product, ProductsProps } from "@/@core/domain/entities/product";

@injectable()
export class CartLocalStorageGateway implements CartGateway {
  private readonly CART_KEY = "cart";

  get(): Cart {
    const products = JSON.parse(
      localStorage.getItem(this.CART_KEY) || "[]",
    ) as ProductsProps[];

    const cart = new Cart({
      products: products.map((product) => new Product(product)),
    });

    return cart;
  }

  save(cart: Cart): void {
    localStorage.setItem(this.CART_KEY, JSON.stringify(cart.allProducts));
  }
}
