import React from "react";

import CategoryView from "../CategoryView/CategoryView";
import VitaminsView from "./VitaminsView";

export const Vitamins = () => {
  return (
    <CategoryView
      categoryId={2}
      categoryName="Vitamins"
      ViewComponent={VitaminsView}
    />
  );
};

export default Vitamins;
