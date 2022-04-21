import { useState } from "react";
import Card from "./Card";
import Navbar from "./Navbar";
import Products from "./Products";
import "./styles.css";
import data from "./data";

export default function App() {
  const [showproduct, setshowproduct] = useState(false);
  const [AddToCardList, setAddToCardList] = useState([]);

  return (
    <div className="App">
      <Navbar
        AddToCardList={AddToCardList}
        setshowproduct={setshowproduct}
        showproduct={showproduct}
      />
      {showproduct ? (
        <Card AddToCard={AddToCardList} setAddToCard={setAddToCardList} />
      ) : (
        <Products
          AddToCardList={AddToCardList}
          setAddToCardList={setAddToCardList}
        />
      )}
    </div>
  );
}
