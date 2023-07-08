import React, { useEffect } from "react";
import { useGlobalContext } from "./context";
const Loading = () => {
  const { setLoading } = useGlobalContext();

  useEffect(() => {
    // Simulating content loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return <div className="loading"></div>;
};

export default Loading;
