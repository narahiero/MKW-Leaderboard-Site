import React, { useEffect, useState } from 'react';
import '../App.css';
import { getLeaderboardCharts, getRecordHolderCharts } from '../../client';
import { Country, FlapOverallButtonState, LeaderboardChartFilter, LeaderboardChartRow } from '../../types';
import { GlitchButtons, FlapButtonsOverallTotalTime, RegionButtons } from '../buttons';
import { LeaderboardChartTable, RecordHolderTable } from '../tables';

const LeaderboardChartsView = () => {
  const [glitchState, setGlitchState] = useState<boolean>(false);
  const [flapOverallState, setFlapOverallState] = useState<FlapOverallButtonState>(FlapOverallButtonState.ThreeLapOnly);
  const [regionState, setRegionState] = useState<Country[]>([]);
  const [leaderboardCharts, setLeaderboardCharts] = useState<LeaderboardChartRow[]>([]);
  const [recordHolderCharts, setRecordHolderCharts] = useState<LeaderboardChartRow[]>([]);

  const handleGlitchClick = (buttonType: boolean) => {
    setGlitchState(buttonType);
  };

  const handleFlapOverallClick = (buttonType: FlapOverallButtonState) => {
    setFlapOverallState(buttonType);
  };

  const handleRegionClick = (region: Country[]) => {
    setRegionState(region);
  };

  useEffect(() => {
    const filter: LeaderboardChartFilter = {
        glitch: glitchState,
        threeLap: flapOverallState === FlapOverallButtonState.Overall || flapOverallState === FlapOverallButtonState.ThreeLapOnly,
        flap: flapOverallState === FlapOverallButtonState.Overall || flapOverallState === FlapOverallButtonState.FlapOnly,
        countries: regionState
    }
    const fetchData = async () => {
      const leaderboardCharts = await getLeaderboardCharts(filter);
      setLeaderboardCharts(leaderboardCharts);
      const recordHolderCharts = await getRecordHolderCharts(filter);
      setRecordHolderCharts(recordHolderCharts);
    };

    fetchData();
  }, [flapOverallState, glitchState, regionState]);

  return (
    <div>
      <div>
        <div>
            <RegionButtons onButtonClick={handleRegionClick} />
        </div>
        <div>
            <GlitchButtons onButtonClick={handleGlitchClick} />
        </div>
        <div>
            <FlapButtonsOverallTotalTime onButtonClick={handleFlapOverallClick} />
        </div>
      </div>
      <div className="table-container">
        <LeaderboardChartTable charts={leaderboardCharts} />
      </div>
      <div className="table-container">
        <RecordHolderTable charts={recordHolderCharts} />
      </div>
    </div>
  );
};

export default LeaderboardChartsView;
