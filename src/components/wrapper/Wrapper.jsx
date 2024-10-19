import React, { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";

const Wrapper = ({ children }) => {
  useEffect(() => {
    if (window !== undefined) {
      window.scrollTo(0, 0);
      const locomotiveScroll = new LocomotiveScroll();
    }
  }, []);
  return <>{children}</>;
};

export default Wrapper;
