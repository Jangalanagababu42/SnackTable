import React, { useState } from "react";
import "./MainComponent.css";
import { snacks } from "./Data";
import { useSnack } from "./SnackContext";

function MainComponent() {
  const { state, dispatch } = useSnack();
  const SearchedItems = (e) => {
    dispatch({ type: "search", payload: e.target.value });
  };
  //   const [snacksData, showSnacksData] = useState(snacks);
  //   const [input, setInput] = useState("");
  //   console.log(input);
  //   const filteredData =
  //     input === ""
  //       ? snacks
  //       : snacks.filter(
  //           (item) =>
  //             item.product_name.toLowerCase().includes(input.toLowerCase()) ||
  //             item.ingredients.find((inneritem) =>
  //               inneritem.toLowerCase().includes(input.toLowerCase())
  //             )
  //         );

  return (
    <div>
      <input
        type="search"
        placeholder="enter any thing"
        name=""
        id=""
        onChange={(e) => SearchedItems(e)}
      />
      <table style={{ width: "100%", display: "block" }}>
        <tr style={{ display: "block" }}>
          <th style={{ width: "10%" }}>ID</th>
          <th style={{ width: "20%" }}>Product Name</th>
          <th>Product Weight</th>
          <th>PRICE (INR)</th>
          <th>Calories</th>
          <th>Ingredients</th>
        </tr>
        <tr style={{ display: "block" }}>
          {state.snacks.map((snack) => (
            <div style={{ display: "block" }}>
              <td style={{ width: "10%" }}>{snack.id}</td>
              <td style={{ width: "20%" }}>{snack.product_name}</td>
              <td>{snack.product_weight}</td>
              <td>{snack.price}</td>
              <td>{snack.calories}</td>
              <td>{snack.ingredients}</td>
            </div>
          ))}
        </tr>
      </table>
    </div>
  );
}

export default MainComponent;
