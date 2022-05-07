import React, { useState, useContext } from "react"
import { AppContext } from "../../context/AppContext";

export const Square = ({
  rowIndex,
  columnIndex,
}) => {
  const [ thisSquare, setThisSquare ] = useState({ rowIndex, columnIndex, isBlue: false});
  const { hoveredSquares, setHoveredSquares } = useContext(AppContext);

  const mouseEnterHandler = () => {
    thisSquare.isBlue = !thisSquare.isBlue;
    setThisSquare(thisSquare);

    if(!thisSquare.isBlue) {
      setHoveredSquares(hoveredSquares.filter(square => square !== thisSquare));
      return
    }

    setHoveredSquares([ ...hoveredSquares, thisSquare]);
  }

  return (
    <div
      className={`square ${ thisSquare.isBlue ? 'square--blue' : '' }`}
      onMouseEnter={() => mouseEnterHandler()}
    />
  )
}
