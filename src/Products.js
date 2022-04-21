import data from "./data";
import "./style/Product.css";
function Product({ items, setAddToCardList, AddToCardList }) {
  function addtocard(ite) {
    setAddToCardList([...AddToCardList, ite]);
  }
  return (
    <>
      <div className="card_container">
        <div className="upper_section">
          <div>
            <div className="card_upper">
              {" "}
              <img src={items.img} />
            </div>
            <div className="card_button">
              <div>
                <h3>{items.title}</h3>
              </div>
              <div>{items.author}</div>
            </div>
          </div>
        </div>

        <div className="bottom_section">
          <div>
            <img
              className="rupee_logo"
              src="https://cdn-icons-png.flaticon.com/512/3104/3104993.png"
            />
            <span className="price">{items.price}</span>
          </div>
          <button
            className="add_to_card"
            onClick={() => {
              addtocard(items);
            }}
          >
            add to card
          </button>
        </div>
      </div>
    </>
  );
}
export default function Products({ AddToCardList, setAddToCardList }) {
  return (
    <>
      <div className="AllProduct">
        {data.map((items) => {
          return (
            <Product
              AddToCardList={AddToCardList}
              setAddToCardList={setAddToCardList}
              items={items}
            />
          );
        })}
      </div>
    </>
  );
}
