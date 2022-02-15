import React, {useState} from 'react';
import Order from './Order';

const FishHeads = () => {
  const [fishHeads, setFishHeads] = useState(0);

  const orderFishHeads = () => {
    setFishHeads(fishHeads++)    
  };

  return (
    <div className="FishHeads">
      <h2>Roly Poly Fish Heads</h2>
      <Order  />
    </div>
  )
}

export default FishHeads;
