import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();
  useEffect(() => {
    history.push("/safexchange/market");
  }, []);
  return <div></div>;
};

export default Home;
