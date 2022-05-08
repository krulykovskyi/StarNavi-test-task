import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";

export const Square = ({ rowIndex, columnIndex }) => {
  const { field, setField } = useContext(AppContext);

  const mouseEnterHandler = () => {
    const newField = field.map((row, rowI) => {
      if(rowIndex === rowI) {
        return row.map((col, colI) => (colI === columnIndex ? !col : col));
      }

      return row;
    });

    setField(newField);
  };

  return (
    <div
      className={`square ${field[rowIndex][columnIndex] ? "square--blue" : ""}`}
      onMouseEnter={mouseEnterHandler}
    />
  );
};
