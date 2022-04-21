import { useState } from "react";

export default function CardItem({
  item,
  setAddToCard,
  AddToCard,
  totalprice,
  settotalprice
}) {
  const [itemcount, setitemcount] = useState(1);

  return (
    <>
      <div className="card_item_cantainer">
        <div className="card_item_cantainer_up">
          <div className="card_item_cantainer_up_left">
            <img className="card_item_img" src={item.img} />
          </div>
          <div className="card_item_cantainer_up_right">
            <div>
              <h2>{item.title}</h2>
            </div>
            <div className=" card_item_cantainer_up_right_price">
              <img
                className="card_item_cantainer_up_right_rupe_logo"
                src="https://cdn-icons-png.flaticon.com/512/3104/3104993.png"
              />
              <h3>{item.price}</h3>
            </div>
          </div>
        </div>
        <div className="card_item_cantainer_down">
          <div className="card_item_cantainer_down_left">
            <button
              className="card_item_cantainer_down_left_input btn"
              onClick={() => {
                setitemcount(itemcount + 1);
                settotalprice(totalprice + item.price);
              }}
            >
              +
            </button>
            <p className="card_item_cantainer_down_left_input input">
              {itemcount}
            </p>

            <button
              className="card_item_cantainer_down_left_input btn"
              onClick={() => {
                if (itemcount === 1) {
                } else {
                  setitemcount(itemcount - 1);
                  settotalprice(totalprice - item.price);
                }
              }}
            >
              -
            </button>
          </div>
          <div className="card_item_cantainer_down_right">
            <button
              className="remove_button"
              onClick={() => {
                const arr = AddToCard.filter((e) => {
                  return e.id !== item.id;
                });
                setAddToCard(arr);
                settotalprice(totalprice - item.price);
              }}
            >
              remove
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
