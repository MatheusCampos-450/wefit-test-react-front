import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import LoaderIcon from "@/shared/assets/LoaderIcon";
import { AppLayoutContainer } from "./styles";

interface IAppLayout {
  children: React.ReactNode;
}

const AppLayout = ({ children }: IAppLayout) => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const startLoading = () => setLoading(true);
    const stopLoading = () => setLoading(false);

    router.events.on("routeChangeStart", startLoading);
    router.events.on("routeChangeComplete", stopLoading);
    router.events.on("routeChangeError", stopLoading);

    return () => {
      router.events.off("routeChangeStart", startLoading);
      router.events.off("routeChangeComplete", stopLoading);
      router.events.off("routeChangeError", stopLoading);
    };
  }, []);

  if (loading)
    return (
      <AppLayoutContainer>
        <LoaderIcon />
      </AppLayoutContainer>
    );

  return <AppLayoutContainer>{children}</AppLayoutContainer>;
};

export default AppLayout;
