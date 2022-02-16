import React, {useState} from 'react';
import Order from './Order';

const FishHead = () => {
  const [numFishHeads, setNumFishHeads] = useState(0);

  return (
    <div className="FishHead">
      <h2>Roly Poly Fish Head</h2>
      <Order 
        item="Roly Poly Fish Head" 
        ordered={numFishHeads} 
        message="Eat Them Up Yum." 
        orderAnother={setNumFishHeads} 
      />
    </div>
  )
}

export default FishHead;
