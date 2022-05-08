import React from "react";
import { Square } from "../Square/Square";

export const FieldRow = ({ row, rowIndex }) => {
  return (
    <div className="field__row">
      {row.map((row, index) => (
        <Square key={index} rowIndex={rowIndex} columnIndex={index} />
      ))}
    </div>
  );
};
