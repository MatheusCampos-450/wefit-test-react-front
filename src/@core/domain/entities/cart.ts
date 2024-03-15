import { removeDuplicates } from "@/shared/utils/removeDuplicates";
import { Product } from "./product";
import { removeLastItem } from "@/shared/utils/removeLastItem";

export interface CartProps {
  products: Product[];
}

export class Cart {
  constructor(public props: CartProps) {}

  addProduct(product: Product) {
    this.props.products.push(product);
  }

  removeProduct(productId: string) {
    const productsWithSameId = this.props.products.filter(
      (product) => product.id === productId,
    );

    const productsWithoutId = this.props.products.filter(
      (product) => product.id !== productId,
    );

    const newProductsArray = [
      ...productsWithoutId,
      ...removeLastItem(productsWithSameId),
    ];

    this.props.products = newProductsArray;
  }

  clearProduct(productTitle: string) {
    this.props.products = this.props.products.filter(
      (product) => product.title !== productTitle,
    );
  }

  clearCart() {
    this.props.products = [];
  }

  get total() {
    return this.props.products.reduce(
      (total, product) => total + product.price,
      0,
    );
  }

  get productsSubtotal() {
    const products = removeDuplicates(
      this.props.products.map((product) => product.props),
    );

    const productsEntity = products.map((product) => new Product(product));

    return productsEntity;
  }

  get allProducts() {
    return this.props.products;
  }
}
