import { useState } from "react";
import CardItem from "./CardItem";
import "./style/card.css";
export default function Card({ AddToCard, setAddToCard }) {
  let total = 0;
  const pricearray = AddToCard.map((e) => {
    total = total + e.price;
    return e.price;
  });
  const [totalprice, settotalprice] = useState(total);
  return (
    <>
      <div className="card_main">
        <div className="left_div">
          <div>
            <h1>My Card({AddToCard.length})</h1>
          </div>
          <div>
            {AddToCard.map((items) => {
              return (
                <CardItem
                  item={items}
                  AddToCard={AddToCard}
                  setAddToCard={setAddToCard}
                  totalprice={totalprice}
                  settotalprice={settotalprice}
                />
              );
            })}
          </div>

          <div className="placeorderdiv">
            <button
              className="placeorder"
              onClick={() => {
                setAddToCard([]);
                settotalprice(0);
              }}
            >
              Place Order
            </button>
          </div>
        </div>
        <div className="right_div">
          <div className="right_div_top">
            <h2>Price details(20%)</h2>
          </div>
          <div className="right_div_middle">
            <h3>Total Items:{AddToCard.length}</h3>
            <h3> Price:{totalprice}</h3>
            <h3> Discount:{Number(totalprice * 0.2)}</h3>
          </div>
          <hr />
          <div className="right_div_top">
            <h1>Total={totalprice - totalprice * 0.2}</h1>
          </div>
        </div>
      </div>
    </>
  );
}
