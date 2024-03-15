import { Cart } from "@/@core/domain/entities/cart";
import { CartGateway } from "@/@core/domain/gateways/cart.gateway";

export class ClearCartUseCase {
  constructor(private cartGateway: CartGateway) {}

  execute(): Cart {
    const cart = this.cartGateway.get();
    cart.clearCart();
    this.cartGateway.save(cart);
    return cart;
  }
}
