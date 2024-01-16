// Import necessary dependencies and components
import React, { useEffect, useState } from 'react';
import '../App.css';
import { Track } from '../../types/enums';
import { LeaderBoardTimeEntry } from '../../types/common';
import { TimeFilter } from '../../types/filters';
import ChartTable from '../tables/ChartTable';
import { getCharts, getChartsQuantity } from '../../client/charts';
import GlitchButtons from '../buttons/GlitchButtons';
import FlapButtons from '../buttons/FlapButtons';
import Navbar from '../common/Navbar';
import Sidebar from '../common/Sidebar';
import Pagination from '../common/Pagination'; // Import Pagination component

const ChartsView = () => {
  const [glitchState, setGlitchState] = useState<boolean>(false);
  const [flapState, setFlapState] = useState<boolean>(false);
  const [trackState, setTrackState] = useState<Track>(Track.LC);
  const [charts, setCharts] = useState<LeaderBoardTimeEntry[]>([]);
  const [chartsQuantity, setChartsQuantity] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1); // State to control the current page

  const handleGlitchClick = (buttonType: boolean) => {
    setGlitchState(buttonType);
  };

  const handleFlapClick = (buttonType: boolean) => {
    setFlapState(buttonType);
  };

  const handleTrackSelect = (selectedTrack: Track) => {
    setTrackState(selectedTrack);
    setCurrentPage(1); // Reset current page when track changes
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    const fetchData = async () => {
      const filter: TimeFilter = {
        track: trackState,
        glitch: glitchState,
        flap: flapState,
        countries: [],
        page: { pageNumber: currentPage, entriesPerPage: 100 } // Use currentPage for pagination
      };
      const data = await getCharts(filter);
      const quantity = await getChartsQuantity(filter);
      setCharts(data);
      setChartsQuantity(quantity);
    };
    fetchData();
  }, [trackState, flapState, glitchState, currentPage]); // Include currentPage in dependencies

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
        <div>
        <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(chartsQuantity / 100)}
            onPageChange={handlePageChange}
        />
        </div>
        <div className="table-container">
          <ChartTable charts={charts} page={currentPage} />
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(chartsQuantity / 100)}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default ChartsView;
