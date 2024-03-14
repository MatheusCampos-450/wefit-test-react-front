export interface ProductsProps {
  id: string;
  title: string;
  price: number;
  image: string;
}

export class Product {
  constructor(public props: ProductsProps) {}

  get id(): string {
    return this.props.id;
  }

  get title(): string {
    return this.props.title;
  }

  get price(): number {
    return this.props.price;
  }

  get image(): string {
    return this.props.image;
  }

  toJSON() {
    return {
      id: this.props.id,
      title: this.props.title,
      price: this.props.price,
      image: this.props.image,
    };
  }
}
