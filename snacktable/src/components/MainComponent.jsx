import React, { useState } from "react";
import "./MainComponent.css";
import { snacks } from "./Data";
import { useSnack } from "./SnackContext";

function MainComponent() {
  const { state, dispatch } = useSnack();

  const SearchedItems = (e) => {
    console.log();
    dispatch({ type: "search", payload: e.target.value });
  };

  const [sortType, setSortType] = useState(null);

  const handleSort = (column) => {
    setSortType(column);
    if (sortType === column) {
      setSortType(`${column}asc`);
    }
    dispatch({ type: column, payload: sortType });
  };

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
          <th
            style={{ width: "10%", cursor: "pointer" }}
            name="id"
            onClick={() => handleSort("id")}
          >
            ID
          </th>
          <th
            style={{ width: "20%" }}
            name="name"
            onClick={() => handleSort("name")}
          >
            Product Name
          </th>
          <th name="weight" onClick={() => handleSort("weight")}>
            Product Weight
          </th>
          <th name=" price" onClick={() => handleSort("price")}>
            PRICE (INR)
          </th>
          <th name="calories" onClick={() => handleSort("calories")}>
            Calories
          </th>
          <th name="ingredients" onClick={() => handleSort("ingredients")}>
            Ingredients
          </th>
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
