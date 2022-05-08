import React, { useState, useCallback } from 'react';
import { AppContext } from '../../context/AppContext';
import { Field } from '../Field/Field';
import { HoveredList } from '../HoveredList/HoveredList';

export const App = ({ modes }) => {
  const [ isStarted, start ] = useState(false);
  const [ field, setField ] = useState([]);

  const selectModeHandler = useCallback((event) => {
    const mode = +event.target.value;

    if(mode) {
      setField(Array(mode).fill(Array(mode).fill(false)));
    }
  });

  const startHandler = useCallback(() => start(true), []);

  const renderOptions = ({ field, name }) => <option value={field} key={field}>{name}</option>;

  return (
    <div className="app">
      <section className="header">
        <select
          className="select-mode"
          onChange={selectModeHandler}
        >
          <option disabled={!!field.length}>Pick mode</option>
          { modes.map(renderOptions) }
        </select>

        <button
          className="start-btn"
          onClick={startHandler}
          disabled={!field.length}
        >
          START
        </button>
      </section>
      {
        isStarted && (
          <section className="main">
            <AppContext.Provider value={{ field, setField }}>
              <Field />
              <HoveredList />
            </AppContext.Provider>
          </section>
        )
      }
    </div>
  );
}
