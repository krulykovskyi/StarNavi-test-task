import React, { useContext } from "react";
import { FieldRow } from "../FieldRow/FieldRow";
import { AppContext } from "../../context/AppContext";

export const Field = () => {
  const { field } = useContext(AppContext);

  return (
    <div className="field">
      {field.map((row, index) => (
        <FieldRow key={index} row={row} rowIndex={index} />
      ))}
    </div>
  );
};
