import React, { useEffect, useState } from 'react';
import '../App.css';
import { getTotalTimeCharts } from '../../client';
import { TotalTimeTable } from '../tables';
import { FlapOverallButtonState, TotalTimeChartRow, PlayerChartFilter } from '../../types';
import { GlitchButtons, FlapButtonsOverallTotalTime } from '../buttons';

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
