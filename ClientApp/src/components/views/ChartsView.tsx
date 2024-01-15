import React, { useEffect, useState } from 'react';
import '../App.css';
import { Track } from '../../types/enums'
import { LeaderBoardTimeEntry } from '../../types/common'
import { TimeFilter } from '../../types/filters';
import ChartTable from '../tables/ChartTable';
import { getCharts } from '../../client/charts';

const ChartsView = () => {
  const [glitchState, setGlitchState] = useState<boolean>(false);
  const [flapState, setFlapState] = useState<boolean>(false);
  const [trackState, setTrack] = useState<Track>(Track.LC);
  const [charts, setCharts] = useState<LeaderBoardTimeEntry[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const baseFilter: TimeFilter = {
        track: trackState,
        glitch: glitchState,
        flap: flapState,
        countries: [],
        page: { pageNumber: 1, entriesPerPage: 100}
      };
      const data = await getCharts(baseFilter);
      setCharts(data);
    };
    fetchData();
  }, [trackState, flapState, glitchState]);

  return (
    <div>
      <div className="table-container">
        <ChartTable charts={charts} />
      </div>
    </div>
  );
};

export default ChartsView;
