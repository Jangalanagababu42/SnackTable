import React from "react";
import { snacks } from "./Data";
export const initialState = {
  snacks: snacks,
};
function SnackReducer(state, action) {
  switch (action.type) {
    case "search":
      const filteredData =
        action.payload === ""
          ? snacks
          : snacks.filter(
              (item) =>
                item.product_name
                  .toLowerCase()
                  .includes(action.payload.toLowerCase()) ||
                item.ingredients.find((inneritem) =>
                  inneritem.toLowerCase().includes(action.payload.toLowerCase())
                )
            );
      return { ...state, snacks: filteredData };
    default:
      return state;
  }
}

export default SnackReducer;
