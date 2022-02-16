import React, {useState} from 'react';
import Order from './Order';

const CheesyPuff = () => {
  const [cheesyPuff, setCheesyPuff] = useState(0);

  return (
    <div className="CheesyPuff">
      <Order 
        item="Cheesy Puff" 
        message="Respect Their Authitarrr." 
        ordered={cheesyPuff} 
        orderAnother={setCheesyPuff} 
      />
    </div>
  )
}

export default CheesyPuff;
