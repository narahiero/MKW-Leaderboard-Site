import React, { useState } from 'react';
import './App.css';
import Top10Table from './components/tables/Top10Table';
import MushroomCup from './components/sampleData/MushroomCup';
import CategoryButtons from './components/buttons/CategoryButtons';

const App = () => {
  const [buttonState, setButtonState] = useState<boolean>(true);

  const handleButtonClick = (buttonType) => {
    setButtonState(buttonType);
  };

  const getTableData = (cupData) => {
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
