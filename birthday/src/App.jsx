import React, { useState } from 'react';
import Menu1 from './Part1/menu1';
import Menu2 from './Part1/menu2';
import Menu3 from './Part1/menu3';
import Menu4 from './Part1/menu4';
import Menu5 from './Part1/menu5';
import Menu6 from './Part1/menu6';
import BirthdayCake from './Part1/birthdaycake';

const App = () => {
  const [showCake, setShowCake] = useState(true);

  return (
    <div style={{ margin: 0, padding: 0, width: '100%', overflowX: 'hidden' }}>
      {showCake && <BirthdayCake onComplete={() => setShowCake(false)} />}
      
      <Menu1 />
      <Menu2 />
      <Menu3 />
      <Menu4 />
      <Menu5 />
      <Menu6 />
    </div>
  );
};

export default App;