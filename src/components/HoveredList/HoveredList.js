import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { flatten } from "../../utils/flatten";

export const HoveredList = () => {
  const { field } = useContext(AppContext);

  const fieldWithLi = flatten(
    field.map((row, rowI) => {
      return row.map((col, colI) => {
        if (!col) {
          return null;
        }

        return (
          <li className="hovered-squares__list-item" key={rowI + "_" + colI}>
            row {rowI + 1} col {colI + 1}
          </li>
        );
      });
    })
  );

  return (
    <div className="hovered-squares">
      <h2 className="hovered-squares__title">Hovered squares:</h2>
      <ul className="hovered-squares__list">{fieldWithLi}</ul>
    </div>
  );
};
