import { GetStaticProps } from "next";

import { ListProductsUseCase } from "@/@core/application/product/list-products.use-case";
import { Registry, container } from "@/@core/infra/container-registry";
import { ProductsProps } from "@/@core/domain/entities/product";

import { Container } from "./styles";
import CardMovie from "@/shared/components/molecules/CardMovie";
interface IHomeProps {
  products: ProductsProps[];
}

export default function Home({ products }: IHomeProps) {
  console.log(products);

  return (
    <Container>
      {products.map((product, key) => (
        <CardMovie key={key} product={product} />
      ))}
    </Container>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const useCase = container.get<ListProductsUseCase>(
    Registry.ListProductUseCase,
  );

  const products = await useCase.execute();

  console.log(products);

  return {
    props: {
      products: products.map((product) => product.toJSON()),
    },
    revalidate: 60,
  };
};
