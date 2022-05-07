import React, { useState } from 'react';
import { AppContext } from '../../context/AppContext';
import { Field } from '../Field/Field';
import { HoveredSquares } from '../HoveredSquares/HoveredSquares';

export const App = (props) => {
  const modes = props.modes;
  const [ mode, setMode ] = useState('');
  const [ isStarted, start ] = useState(false);
  const [ hoveredSquares, setHoveredSquares ] = useState([]);

  return (
    <div className="app">
      <section className="header">
        <select
          className="select-mode"
          onChange={(event) => setMode(+event.target.value)}
        >
          <option disabled={isStarted}>Pick mode</option>
          {
            modes.map(modeObj => (
              <option value={modeObj.field} key={modeObj.field}>
                {modeObj.name}
              </option>)
            )
          }
        </select>

        <button
          className="start-btn"
          onClick={() => start(true)}
          disabled={!mode}
        >
          START
        </button>
      </section>
      {
        isStarted && (
          <section className="main">
            <AppContext.Provider value={{ mode, hoveredSquares, setHoveredSquares }}>
              <Field />
              <HoveredSquares hoveredSquares={hoveredSquares} />
            </AppContext.Provider>
          </section>
        )
      }
    </div>
  );
}
