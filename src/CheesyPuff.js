import React, {useState} from 'react';
import Order from './Order';

const CheesyPuff = () => {
  const [cheesyPuff, setCheesyPuff] = useState(0);

  const orderCheesyPuff = () => {
    setCheesyPuff(cheesyPuff++)    
  };

  return (
    <div className="CheesyPuff">
      <Order item="Cheesy Puff" message="Respect Their Authitarrr." cheesyPuff={cheesyPuff} orderCheesyPuff={orderCheesyPuff} />
    </div>
  )
}

export default CheesyPuff;
