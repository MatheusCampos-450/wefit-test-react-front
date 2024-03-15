import { useState, useEffect } from "react";

const throttle = (callback: () => void, delay: number) => {
  let timerId: NodeJS.Timeout;

  return () => {
    if (!timerId) {
      timerId = setTimeout(() => {
        callback();
        clearTimeout(timerId);
      }, delay);
    }
  };
};

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<{
    width: number | undefined;
    height: number | undefined;
  }>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    const throttledHandleResize = throttle(handleResize, 200); // Throttle para 200ms

    window.addEventListener("resize", throttledHandleResize);

    handleResize();

    return () => window.removeEventListener("resize", throttledHandleResize);
  }, []);

  return windowSize;
};

export default useWindowSize;
