import React, { useState } from 'react';
import CarsContext from './CarsContext';

function CarsProvider ({ children }) {
  const [cars, setCars] = useState({
    red: false,
    blue: false,
    yellow: false,
  });
  
  const moveCar = (car, side) => {
    setCars({
      ...cars,
      [car]: side,
    });
  };

  const context = { cars, moveCar };

  return (
    <CarsContext.Provider value={context}>
      {children}
    </CarsContext.Provider>
  );
}

export {CarsContext, CarsProvider as Provider}