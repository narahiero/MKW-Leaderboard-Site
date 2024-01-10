import React, { useState } from 'react';
import './App.css';
import Top10Table from './tables/Top10Table';
import MushroomCup from './sampleData/MushroomCup';
import CategoryButtons from './buttons/CategoryButtons';

const App = () => {
  const [buttonState, setButtonState] = useState<boolean>(true);

  const handleButtonClick = (buttonType: boolean) => {
    setButtonState(buttonType);
  };

  const getTableData = (cupData: Top10TableProps) => {
    return buttonState ? cupData.data : cupData.glitchData || cupData.data;
  };

  return (
    <div>
      <div>
        <CategoryButtons onButtonClick={handleButtonClick} />
      </div>
      <div className="table-container">
        <Top10Table title={MushroomCup.lc.title} data={getTableData(MushroomCup.lc)} />
        <Top10Table title={MushroomCup.mmm.title} data={getTableData(MushroomCup.mmm)} />
        <Top10Table title={MushroomCup.mg.title} data={getTableData(MushroomCup.mg)} />
        <Top10Table title={MushroomCup.tf.title} data={getTableData(MushroomCup.tf)} />
      </div>
    </div>
  );
};

export default App;
