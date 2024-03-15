import { Cart } from "@/@core/domain/entities/cart";
import { CartGateway } from "@/@core/domain/gateways/cart.gateway";

export class ClearProductCartUseCase {
  constructor(private cartGateway: CartGateway) {}

  execute(productTitle: string): Cart {
    const cart = this.cartGateway.get();
    cart.clearProduct(productTitle);
    this.cartGateway.save(cart);
    return cart;
  }
}
