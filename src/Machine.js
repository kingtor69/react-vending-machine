import React from 'react';
import { Link } from 'react-router-dom';

import './Machine.css';

const Machine = () => {
  return (
    <div className="Machine">
      <h2>Here's what's in the machine:</h2>
      <Link className="item" to="/fishHead">Roly Poly Fish Head</Link>
      <Link className="item" to="/cheesyPuff">Cheesy Puff</Link>
      <Link className="item" to="/monkeyBrain">Monkey Brain</Link>
    </div>
  )
}

export default Machine;
