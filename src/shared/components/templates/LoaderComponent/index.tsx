import React from "react";

import LoaderIcon from "@/shared/assets/LoaderIcon";

import { LoaderComponentContainer } from "./styles";

const LoaderComponent = () => {
  return (
    <LoaderComponentContainer>
      <LoaderIcon />
    </LoaderComponentContainer>
  );
};

export default LoaderComponent;
