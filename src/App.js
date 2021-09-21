import { useState } from "react";
import "./App.css";
export default function App() {
  const products = [
    {
      productname: "Fancy Product",
      productprice: "$40.00 - $80.00",
    },
    {
      productname: "Special Item",
      productprice: " $18.00",
    },
    {
      productname: "Sale Item",
      productprice: " $25.00",
    },
    {
      productname: "Popular Item",
      productprice: "$40.00",
    },
    {
      productname: "Sale Item",
      productprice: " $25.00",
    },
    {
      productname: "Fancy Product",
      productprice: "$120.00 - $280.00",
    },
    {
      productname: "Special Item",
      productprice: " $18.00",
    },
    {
      productname: "Popular Item",
      productprice: "$40.00",
    },
  ];
  return (
    <div className="container">
      {products.map(({ productname, productprice }) => (
        <Vote product={productname} price={productprice} />
      ))}
    </div>
  );
}

function Vote({ product, price }) {
  return (
    <div className="card">
      <div className="sizediv">450 x 300</div>
      <div class="content">
        <span className="sale">Sale</span>
        <h2>{product}</h2>
        <div className="rating"></div>
        <p className="price">{price}</p>
      </div>
      <Cartbutton />
    </div>
  );
}
function Cartbutton() {
  const [additem, setAdd] = useState(0);
  return (
    <div className="cartitems">
      <div
        className="changeitems"
        style={{ display: additem === 0 ? "none" : "block" }}
      >
        <button onClick={() => setAdd(additem - 1)}>-</button>
        <span className="additem">{additem} </span>
        <button onClick={() => setAdd(additem + 1)}>+</button>
        <br />
      </div>

      <div
        className="zeroitems"
        style={{ display: additem !== 0 ? "none" : "block" }}
      >
        <button className="add-to-cart" onClick={() => setAdd(additem + 1)}>
          Add to cart
        </button>
      </div>
    </div>
  );
}
