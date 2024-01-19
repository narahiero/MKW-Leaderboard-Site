import React, { useEffect, useState } from 'react';
import { TotalTimeChartRow } from '../../types/common';
import '../App.css';
import Navbar from '../common/Navbar';
import { getTotalTimeCharts } from '../../client/charts';
import GlitchButtons from '../buttons/GlitchButtons';
import { FlapOverallButtonState } from '../../types/enums';
import { PlayerChartFilter } from '../../types/filters';
import TotalTimeTable from '../tables/TotalTimeTable';
import FlapButtonsOverallTotalTime from '../buttons/FlapButtonsOverallTotalTime';

const TotalTimeView = () => {
  const [glitchState, setGlitchState] = useState<boolean>(false);
  const [flapOverallState, setFlapOverallState] = useState<FlapOverallButtonState>(FlapOverallButtonState.ThreeLapOnly);
  const [allButtonState, setAllButtonState] = useState<boolean>(false);
  const [charts, setCharts] = useState<TotalTimeChartRow[]>([]);

  const handleGlitchClick = (buttonType: boolean) => {
    setGlitchState(buttonType);
  };

  const handleFlapOverallClick = (buttonType: FlapOverallButtonState) => {
    setFlapOverallState(buttonType);
  };

  const handleAllButtonClick = (buttonType: boolean) => {
    setAllButtonState(buttonType);
  };

  useEffect(() => {
    console.log(flapOverallState);
    const filter: PlayerChartFilter = {
        glitch: glitchState,
        threeLap: flapOverallState === FlapOverallButtonState.Overall || flapOverallState === FlapOverallButtonState.ThreeLapOnly,
        flap: flapOverallState === FlapOverallButtonState.Overall || flapOverallState === FlapOverallButtonState.FlapOnly,
        all: allButtonState,
    }
    const fetchData = async () => {
      const fetchedCharts = await getTotalTimeCharts(filter);
      setCharts(fetchedCharts);
    };

    fetchData();
  }, [allButtonState, flapOverallState, glitchState]);

  return (
    <div>
      <Navbar />
      <div>
        <div>
          <GlitchButtons onButtonClick={handleGlitchClick} />
        </div>
        <div>
          <FlapButtonsOverallTotalTime onButtonClick={handleFlapOverallClick} />
        </div>
        <div className="button-container">
            <label className="all-box-label">
                Include scores outside the top 100
                <input type="checkbox" className="all-box" onChange={(event) => handleAllButtonClick(event.target.checked)} />
            </label>
        </div>
      </div>
      <div className="table-container">
        <TotalTimeTable charts={charts} />
      </div>
    </div>
  );
};

export default TotalTimeView;
