import React from 'react';
import { Link } from 'react-router-dom';
import FishHeads from './FishHeads';
import CheesyPuffs from './CheesyPuffs';
import MonkeyBrains from './MonkeyBrains';

import './Machine.css';

const Machine = () => {
  return (
    <div className="Machine">
      <h2>Here's what's in the machine:</h2>
      <Link to="/fishheads">Roly Poly Fish Heads</Link>
      <Link to="/cheesypuffs">Cheesy Puffs</Link>
      <Link to="/monkeybrains">Monkey Brains</Link>
    </div>
  )
}