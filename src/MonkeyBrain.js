import React, {useState} from 'react';
import Order from './Order';

const MonkeyBrain = () => {
  const [numMonkeyBrain, setNumMonkeyBrain] = useState(0);

  return (
    <div className="MonkeyBrain">
      <Order 
        item="Monkey Brain" 
        ordered={numMonkeyBrain} 
        message="Don't Offend Your Host." 
        orderAnother={setNumMonkeyBrain} 
      />
    </div>
  )
}

export default MonkeyBrain;
