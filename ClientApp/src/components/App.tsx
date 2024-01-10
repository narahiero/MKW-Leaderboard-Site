import React, { useState } from 'react';
import './App.css';
import Top10Table from './tables/Top10Table';
import CategoryButtons from './buttons/CategoryButtons';
import { getTop10 } from '../client/top10s';

const App = () => {
  const [buttonState, setButtonState] = useState<boolean>(true);

  const handleButtonClick = (buttonType: boolean) => {
    setButtonState(buttonType);
  };

  const getButtonState = (track: Track, glitch: boolean) => {
    return buttonState;
  };

  return (
    <div>
      <div>
        <CategoryButtons onButtonClick={handleButtonClick} />
      </div>
      <div className="table-container">
        <Top10Table entries={getTop10(Track.LC, false, false)} />
      </div>
    </div>
  );
};

export default App;
