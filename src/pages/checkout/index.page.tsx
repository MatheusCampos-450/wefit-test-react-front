import React from "react";

import { GetServerSideProps } from "next";
import LoaderComponent from "@/shared/components/templates/LoaderComponent";

const Checkout = () => {
  return <LoaderComponent />;
};

export default Checkout;

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: "/cart",
      permanent: true,
    },
  };
};
