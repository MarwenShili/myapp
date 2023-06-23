import React, { useEffect } from "react";
import Card from "../../components/Card/Card";
import "./Home.css";
import { useState } from "react";
import { fetchData } from "../../utils/FetchData";
import CardProduct from "../../components/CardProduct/CardProduct";

function Home(props) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchData(setProducts);
  }, []);

  return (
    <div className="home">
      <div className="cards">
        {products?.map((product, index) => (
          <CardProduct element={product} />
        ))}
      </div>
    </div>
  );
}

export default Home;
