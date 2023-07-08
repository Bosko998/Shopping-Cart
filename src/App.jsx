import React from "react";
import Navbar from "./Navbar";
import Items from "./Items";
import Loading from "./Loading";
import { useGlobalContext } from "./context";
function App() {
  const { loading } = useGlobalContext();
  return (
    <main>
      <Navbar />
      {loading ? <Loading /> : <Items />}
    </main>
  );
}

export default App;
