import { AxiosInstance } from "axios";

import { Product } from "@/@core/domain/entities/product";
import { ProductGateway } from "@/@core/domain/gateways/product.gateway";

export class ProductHttpGateway implements ProductGateway {
  constructor(private http: AxiosInstance) {}

  async findAll(): Promise<Product[]> {
    return this.http.get<Product[]>("products").then((res) =>
      res.data.map(
        (data) =>
          new Product({
            id: data.id,
            image: data.image,
            title: data.title,
            price: data.price,
          }),
      ),
    );
  }
}
