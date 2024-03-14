import { Product } from "@/@core/domain/entities/product";
import { ProductGateway } from "@/@core/domain/gateways/product.gateway";

export class ListProductsUseCase {
  constructor(private productGateway: ProductGateway) {}

  execute(): Promise<Product[]> {
    return this.productGateway.findAll();
  }
}
