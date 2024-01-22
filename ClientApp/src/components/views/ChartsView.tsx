// Import necessary dependencies and components
import React, { useEffect, useState } from 'react';
import '../App.css';
import { ChartTable } from '../tables';
import { getCharts, getChartsQuantity } from '../../client';
import { Navbar, Sidebar, Pagination } from '../common';
import { Track, LeaderBoardTimeEntry, TimeFilter } from '../../types';
import { GlitchButtons, FlapButtons } from '../buttons';

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
      <div className="chart-button-container">
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
