import { Product } from "../entities/product";

export interface ProductGateway {
  findAll(): Promise<Product[]>;
}
