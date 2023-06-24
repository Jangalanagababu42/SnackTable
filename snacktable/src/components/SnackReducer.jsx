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
    case "id":
      console.log(action.payload, "action.payload ");
      const sortbyid = state.snacks.sort((a, b) =>
        action.payload === "id"
          ? b.id - a.id
          : action.payload === "idasc"
          ? a.id - b.id
          : a.id - b.id
      );
      return { ...state, snacks: sortbyid };
    case "price":
      console.log(action.payload, "action.payload ");
      const sortbyprice = state.snacks.sort((a, b) =>
        action.payload === "price"
          ? b.price - a.price
          : action.payload === "priceasc"
          ? a.price - b.price
          : a.price - b.price
      );
      return { ...state, snacks: sortbyprice };
    case "name":
      console.log(action.payload, "action.payload ");
      const sortbyname = state.snacks.sort((a, b) =>
        action.payload === "name"
          ? b.product_name.localeCompare(a.product_name)
          : action.payload === "nameasc"
          ? a.product_name.localeCompare(b.product_name)
          : a.product_name.localeCompare(b.product_name)
      );
      return { ...state, snacks: sortbyname };
    case "weight":
      console.log(action.payload, "action.payload ");
      const sortbyweight = state.snacks.sort((a, b) =>
        action.payload === "weight"
          ? parseFloat(b.product_weight) - parseFloat(a.product_weight)
          : action.payload === "weightasc"
          ? parseFloat(a.product_weight) - parseFloat(b.product_weight)
          : parseFloat(a.product_weight) - parseFloat(b.product_weight)
      );
      return { ...state, snacks: sortbyweight };
    case "calories":
      console.log(action.payload, "action.payload ");
      const sortbycalories = state.snacks.sort((a, b) =>
        action.payload === "calories"
          ? b.calories - a.calories
          : action.payload === "caloriesasc"
          ? a.calories - b.calories
          : a.calories - b.calories
      );
      return { ...state, snacks: sortbycalories };
    case "ingredients":
      console.log(action.payload, "action.payload ");
      const sortbyingredients = state.snacks.sort((a, b) =>
        action.payload === "ingredients"
          ? b.ingredients[0].localeCompare(a.ingredients[0])
          : action.payload === "ingredientsasc"
          ? a.ingredients[0].localeCompare(b.ingredients[0])
          : a.ingredients[0].localeCompare(b.ingredients[0])
      );
      return { ...state, snacks: sortbyingredients };
    default:
      return state;
  }
}

export default SnackReducer;
