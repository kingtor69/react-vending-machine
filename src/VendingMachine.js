import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Machine from './Machine';
import FishHeads from './FishHeads';
import CheesyPuffs from './CheesyPuffs';
import MonkeyBrains from './MonkeyBrains';

const VendingMachine = () => {
  return (
    <BrowserRouter className="VendingMachine">
      <h1>Hungry? Whatchoo want?</h1>
      <Routes>
        <Route path='/' element={<Machine />} />
        <Route exact path='/fishheads' element={<FishHeads />} />
        <Route exact path='/cheesypuffs' element={<CheesyPuffs />} />
        <Route exact path='/monkeybrains' element={<MonkeyBrains />} />
      </Routes>
    </BrowserRouter>
  );
};

export default VendingMachine;