import { Product } from "./product";

export interface CartProps {
  products: Product[];
}

export class Cart {
  constructor(public props: CartProps) {}

  addProduct(product: Product) {
    this.props.products.push(product);
  }

  removeProduct(productId: string) {
    this.props.products = this.props.products.filter(
      (product) => product.id !== productId,
    );
  }

  clearProduct(productTitle: string) {
    this.props.products = this.props.products.filter(
      (product) => product.title !== productTitle,
    );
  }

  get total() {
    return this.props.products.reduce(
      (total, product) => total + product.price,
      0,
    );
  }

  get products() {
    return this.props.products;
  }
}
