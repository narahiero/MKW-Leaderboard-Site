import React, { useEffect, useState } from 'react';
import './App.css';
import Top10Table from './tables/Top10Table';
import GlitchButtons from './buttons/GlitchButtons';
import { getTop10 } from '../client/top10s';
import FlapButtons from './buttons/flapButtons';
import { Track } from '../types/enums'

const App = () => {
  const [glitchState, setGlitchState] = useState<boolean>(false);
  const [flapState, setFlapState] = useState<boolean>(false);
  const [top10Data, setTop10Data] = useState<LeaderBoardTimeEntry[]>([]);

  const handleGlitchClick = (buttonType: boolean) => {
    setGlitchState(buttonType);
  };
  const handleFlapClick = (buttonType: boolean) => {
    setFlapState(buttonType);
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await getTop10(Track.LC, glitchState, flapState);
      setTop10Data(data);
    };
    fetchData();
  }, [flapState, glitchState]);

  return (
    <div>
      <div>
        <GlitchButtons onButtonClick={handleGlitchClick} />
      </div>
      <div>
        <FlapButtons onButtonClick={handleFlapClick} />
      </div>
      <div className="table-container">
        <Top10Table top10s={top10Data} />
      </div>
    </div>
  );
};

export default App;
