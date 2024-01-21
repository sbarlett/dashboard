import { useState, useEffect } from "react";
import { MediaQuery } from "../utils/types";

function useIsMobile() {
  const [mQuery, setMQuery] = useState<MediaQuery>({ matches: true });

  const listener = () => {
    setMQuery({ matches: window?.innerWidth < 768 ? true : false });
  };

  useEffect(() => {
    try {
      setMQuery({ matches: window?.innerWidth < 768 ? true : false });
      const mql = window?.matchMedia("(min-width: 768px)");
      mql?.addEventListener
        ? mql.addEventListener("change", listener)
        : mql.addListener(listener);
      if (mql.removeEventListener) {
        return () => mql.removeEventListener("change", listener);
      } else {
        return () => mql.removeListener(listener);
      }
    } catch (err) {
      console.log(err);
    }
  }, []);

  return mQuery.matches;
}

export default useIsMobile;
