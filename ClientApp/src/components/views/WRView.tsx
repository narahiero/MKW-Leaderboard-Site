import React, { useEffect, useState } from 'react';
import '../App.css';
import { Navbar } from '../common';
import { getRecordHolderChartsByWRFilter, getWorldRecords } from '../../client';
import { Country, LeaderboardChartRow, WRFilter, WRRow } from '../../types';
import { GlitchButtons, RegionButtons, FlapButtons } from '../buttons';
import { WRCharts, RecordHolderTable } from '../tables';

const LeaderboardChartsView = () => {
  const [glitchState, setGlitchState] = useState<boolean>(false);
  const [flapState, setFlapState] = useState<boolean>(false);
  const [regionState, setRegionState] = useState<Country[]>([]);
  const [wrCharts, setwrCharts] = useState<WRRow[]>([]);
  const [recordHolderCharts, setRecordHolderCharts] = useState<LeaderboardChartRow[]>([]);

  const handleGlitchClick = (buttonType: boolean) => {
    setGlitchState(buttonType);
  };

  const handleFlapClick = (buttonType: boolean) => {
    setFlapState(buttonType);
  };

  const handleRegionClick = (region: Country[]) => {
    setRegionState(region);
  };

  useEffect(() => {
    const filter: WRFilter = {
        glitch: glitchState,
        flap: flapState,
        countries: regionState
    }
    const fetchData = async () => {
      const wrCharts = await getWorldRecords(filter);
      setwrCharts(wrCharts);
      const recordHolderCharts = await getRecordHolderChartsByWRFilter(filter);
      setRecordHolderCharts(recordHolderCharts);
    };

    fetchData();
  }, [flapState, glitchState, regionState]);

  return (
    <div>
      <Navbar />
      <div>
        <div>
            <RegionButtons onButtonClick={handleRegionClick} />
        </div>
        <div>
            <GlitchButtons onButtonClick={handleGlitchClick} />
        </div>
        <div>
            <FlapButtons onButtonClick={handleFlapClick} />
        </div>
      </div>
      <div className="table-container">
        <WRCharts charts={wrCharts} />
      </div>
      <div className="table-container">
        <RecordHolderTable charts={recordHolderCharts} />
      </div>
    </div>
  );
};

export default LeaderboardChartsView;
