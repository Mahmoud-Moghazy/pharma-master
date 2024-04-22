import React from "react";

import CategoryView from "../CategoryView/CategoryView";
import CaresView from "./CaresView";

export const Cares = () => {
  return (
    <CategoryView
      categoryId={4}
      categoryName="Cares"
      ViewComponent={CaresView}
    />
  );
};

export default Cares;
