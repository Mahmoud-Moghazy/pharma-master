import React from "react";

import CategoryView from "../CategoryView/CategoryView";
import EquipmentsView from "./EquipmentsView";

export const Equipments = () => {
  return (
    <CategoryView
      categoryId={3}
      categoryName="Equipments"
      ViewComponent={EquipmentsView}
    />
  );
};

export default Equipments;
