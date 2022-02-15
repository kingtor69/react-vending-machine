import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Machine from './Machine';
import FishHead from './FishHead';
import CheesyPuff from './CheesyPuff';
import MonkeyBrain from './MonkeyBrain';

const VendingMachine = () => {
  return (
    <BrowserRouter className="VendingMachine">
      <h1>Hungry? Whatchoo want?</h1>
      <Routes>
        <Route path='/' element={<Machine />} />
        <Route exact path='/fishHead' element={<FishHead />} />
        <Route exact path='/cheesyPuff' element={<CheesyPuff />} />
        <Route exact path='/monkeyBrain' element={<MonkeyBrain />} />
      </Routes>
    </BrowserRouter>
  );
};

export default VendingMachine;