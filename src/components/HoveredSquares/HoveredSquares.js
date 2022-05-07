import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';

export const HoveredSquares = () => {
  const { hoveredSquares } = useContext(AppContext);

  return (
    <div className="hovered-squares">
      <h2 className="hovered-squares__title">Hovered squares:</h2>
      <ul className="hovered-squares__list">
        {
          hoveredSquares.map(square => {
            const { rowIndex, columnIndex} = square;

            return (
              <li
                className="hovered-squares__list-item"
                key={`${rowIndex + '' + columnIndex}`}
              >
                row {rowIndex} col {columnIndex}
              </li>
            );
          })
        }
      </ul>
    </div>
  );
};
