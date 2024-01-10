import React, { useEffect, useState } from 'react';
import './App.css';
import Top10Table from './tables/Top10Table';
import GlitchButtons from './buttons/GlitchButtons';
import { getTop10 } from '../client/top10s';
import FlapButtons from './buttons/FlapButtons';
import CupButtons from './buttons/CupButtons';
import { Cup } from '../types/enums'
import { LeaderBoardTimeEntry } from '../types/common'

const App = () => {
  const [glitchState, setGlitchState] = useState<boolean>(false);
  const [flapState, setFlapState] = useState<boolean>(false);
  const [cupState, setCupState] = useState<Cup>(Cup.MushroomCup);
  const [top10Data1, setTop10Data1] = useState<LeaderBoardTimeEntry[]>([]);
  const [top10Data2, setTop10Data2] = useState<LeaderBoardTimeEntry[]>([]);
  const [top10Data3, setTop10Data3] = useState<LeaderBoardTimeEntry[]>([]);
  const [top10Data4, setTop10Data4] = useState<LeaderBoardTimeEntry[]>([]);

  const handleGlitchClick = (buttonType: boolean) => {
    setGlitchState(buttonType);
  };
  const handleFlapClick = (buttonType: boolean) => {
    setFlapState(buttonType);
  };
  const handleCupClick = (cup: Cup) => {
    setCupState(cup);
  };

  useEffect(() => {
    const fetchData = async () => {
      setTop10Data1(await getTop10(cupState * 4, glitchState, flapState));
      setTop10Data2(await getTop10(cupState * 4 + 1, glitchState, flapState));
      setTop10Data3(await getTop10(cupState * 4 + 2, glitchState, flapState));
      setTop10Data4(await getTop10(cupState * 4 + 3, glitchState, flapState));
    };
    fetchData();
  }, [cupState, flapState, glitchState]);

  return (
    <div>
      <div>
        <CupButtons onButtonClick={handleCupClick} />
      </div>
      <div>
        <GlitchButtons onButtonClick={handleGlitchClick} />
      </div>
      <div>
        <FlapButtons onButtonClick={handleFlapClick} />
      </div>
      <div className="table-container">
        <Top10Table top10s={top10Data1} />
        <Top10Table top10s={top10Data2} />
        <Top10Table top10s={top10Data3} />
        <Top10Table top10s={top10Data4} />
      </div>
    </div>
  );
};

export default App;
