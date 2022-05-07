import React, { useState, useContext }from "react";
import { FieldRow } from "../FieldRow/FieldRow";
import { AppContext } from "../../context/AppContext";

export const Field = () => {
  const [ field, setField ] = useState([]);
  const { mode } = useContext(AppContext);

  if(field.length !== mode) {
    setField(Array(mode).fill(null));
  }

  return (
    <div className="field">
      { field.map((el, index) => (
          <FieldRow
            field={field}
            key={index}
            rowIndex={index + 1}
          />
        ))
      }
    </div>
  );
}
