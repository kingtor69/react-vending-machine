import React, {useState} from 'react';
import Order from './Order';

const MonkeyBrain = () => {
  const [monkeyBrain, setMonkeyBrain] = useState(0);

  const orderMonkeyBrain = () => {
    setMonkeyBrain(monkeyBrain++)    
  };

  return (
    <div className="MonkeyBrain">
      <Order item="Monkey Brain" ordered={monkeyBrain} message="Don't Offend Your Host." orderAnother={orderMonkeyBrain} />
    </div>
  )
}

export default MonkeyBrain;
