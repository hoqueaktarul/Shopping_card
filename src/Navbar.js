import "./style/Navbar.css";
export default function Navbar({
  AddToCardList,
  setshowproduct,
  showproduct,
  item
}) {
  return (
    <>
      <div className="Navbar_container">
        <div
          onClick={() => {
            // setshowproduct(false);
          }}
        >
          <h2>Shopping card</h2>
        </div>
        <div
          className="Navbar_right"
          onClick={() => {
            setshowproduct(!showproduct);
          }}
        >
          {" "}
          <img
            className="shopping_logo"
            src="https://cdn-icons-png.flaticon.com/512/1170/1170576.png"
          />
          <span>{AddToCardList.length}</span>
        </div>
      </div>
    </>
  );
}
