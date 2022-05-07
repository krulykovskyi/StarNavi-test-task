import React from "react";
import { Square } from "../Square/Square";

export const FieldRow = ({ field, rowIndex }) => {
  return (
    <div className="field__row">
      {
        field.map((el, index) => (
          <Square
            key={index}
            rowIndex={rowIndex}
            columnIndex={index + 1}
          />)
        )
      }
    </div>
  );
}
