import React, { useEffect, useState } from 'react';
import '../App.css';
import { PRSRTable } from '../tables';
import { getPRSRCharts } from '../../client';
import { FlapOverallButtonState, PlayerChartFilter, PRSRChartRow } from '../../types';
import { GlitchButtons, FlapButtonsOverall } from '../buttons';

const PRSRView = () => {
  const [glitchState, setGlitchState] = useState<boolean>(false);
  const [flapOverallState, setFlapOverallState] = useState<FlapOverallButtonState>(FlapOverallButtonState.Overall);
  const [allButtonState, setAllButtonState] = useState<boolean>(false);
  const [charts, setCharts] = useState<PRSRChartRow[]>([]);

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
      const fetchedCharts = await getPRSRCharts(filter);
      setCharts(fetchedCharts);
    };

    fetchData();
  }, [allButtonState, flapOverallState, glitchState]);

  return (
    <div className="main">
      <GlitchButtons onButtonClick={handleGlitchClick} />
      <FlapButtonsOverall onButtonClick={handleFlapOverallClick} />
      <div className="button-container">
        <label className="all-box-label">
          Include scores outside the top 100
          <input type="checkbox" className="all-box" onChange={(event) => handleAllButtonClick(event.target.checked)} />
        </label>
      </div>
      <div className="table-container">
        <PRSRTable charts={charts} />
      </div>
    </div>
  );
};

export default PRSRView;
