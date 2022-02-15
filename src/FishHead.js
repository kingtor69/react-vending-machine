import React, {useState} from 'react';
import Order from './Order';

const FishHead = () => {
  const [numFishHeads, setNumFishHeads] = useState(0);

  const orderFishHead = () => {
    setNumFishHeads(numFishHeads++)    
  };

  return (
    <div className="FishHead">
      <h2>Roly Poly Fish Head</h2>
      <Order item="Roly Poly Fish Head" ordered={numFishHeads} message="Eat Them Up Yum." orderAnother={orderFishHead} />
    </div>
  )
}

export default FishHead;
