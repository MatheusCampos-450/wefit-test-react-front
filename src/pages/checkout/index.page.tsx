import React from "react";

import { GetStaticProps } from "next";

const Checkout = () => {
  return <></>;
};

export default Checkout;

export const getStaticProps: GetStaticProps = async () => {
  return {
    redirect: {
      destination: "/cart",
      permanent: true,
    },
  };
};
