// ChartsView component
import React, { useEffect, useState } from 'react';
import '../App.css';
import { Track } from '../../types/enums';
import { LeaderBoardTimeEntry } from '../../types/common';
import { TimeFilter } from '../../types/filters';
import ChartTable from '../tables/ChartTable';
import { getCharts } from '../../client/charts';
import GlitchButtons from '../buttons/GlitchButtons';
import FlapButtons from '../buttons/FlapButtons';
import Navbar from '../common/Navbar';
import Sidebar from '../common/Sidebar';

const ChartsView = () => {
  const [glitchState, setGlitchState] = useState<boolean>(false);
  const [flapState, setFlapState] = useState<boolean>(false);
  const [trackState, setTrackState] = useState<Track>(Track.LC);
  const [charts, setCharts] = useState<LeaderBoardTimeEntry[]>([]);

  const handleGlitchClick = (buttonType: boolean) => {
    setGlitchState(buttonType);
  };

  const handleFlapClick = (buttonType: boolean) => {
    setFlapState(buttonType);
  };

  const handleTrackSelect = (selectedTrack: Track) => {
    setTrackState(selectedTrack);
  };

  useEffect(() => {
    const fetchData = async () => {
      const baseFilter: TimeFilter = {
        track: trackState,
        glitch: glitchState,
        flap: flapState,
        countries: [],
        page: { pageNumber: 1, entriesPerPage: 100 }
      };
      const data = await getCharts(baseFilter);
      setCharts(data);
    };
    fetchData();
  }, [trackState, flapState, glitchState]);

  return (
    <div>
      <Navbar />
      <div className="sidebar">
        <Sidebar onTrackSelect={handleTrackSelect} />
      </div>
      <div className="content-container">
        <div>
          <GlitchButtons onButtonClick={handleGlitchClick} />
        </div>
        <div>
          <FlapButtons onButtonClick={handleFlapClick} />
        </div>
        <div className="table-container">
          <ChartTable charts={charts} />
        </div>
      </div>
    </div>
  );
};

export default ChartsView;
