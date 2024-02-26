import React from 'react';
import { Pages } from '../../types';

const Navbar = () => {
  const url = window.location.pathname;
  return (
    <div className="navbar">
      <a href={Pages.Top10s} className={url.includes(Pages.Top10s) ? 'active' : ''}>
        Top 10s
      </a>
      <a href={Pages.WorldRecords} className={url.includes(Pages.WorldRecords) ? 'active' : ''}>
        Records
      </a>
      <a href={Pages.Leaderboards} className={url.includes(Pages.Leaderboards) ? 'active' : ''}>
        Rankings (Top 10s)
      </a>
      <a href={Pages.AFCharts} className={url.includes(Pages.AFCharts) ? 'active' : ''}>
        Rankings (AF)
      </a>
      <a href={Pages.TotalTimeCharts} className={url.includes(Pages.TotalTimeCharts) ? 'active' : ''}>
        Total Times
      </a>
      <a href={Pages.PRSRCharts} className={url.includes(Pages.PRSRCharts) ? 'active' : ''}>
        PRWR
      </a>
      <a href={Pages.TrackCharts} className={url.includes(Pages.TrackCharts) ? 'active' : ''}>
        Charts
      </a>
      <a href={Pages.Players} className={url.includes(Pages.Players) ? 'active' : ''}>
        Players A-Z
      </a>
    </div>
  );
};

export default Navbar;
