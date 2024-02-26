import React from 'react';
import { Pages } from '../../types';

const Navbar = () => {
  const url = window.location.pathname;
  return (
    <div className="navbar">
      <a href="/top10" className={url.includes(Pages.Top10s) ? 'active' : ''}>
        Top 10s
      </a>
      <a href="/records" className={url.includes(Pages.WorldRecords) ? 'active' : ''}>
        Records
      </a>
      <a href="/top10rankings" className={url.includes(Pages.Leaderboards) ? 'active' : ''}>
        Rankings (Top 10s)
      </a>
      <a href="/af" className={url.includes(Pages.AFCharts) ? 'active' : ''}>
        Rankings (AF)
      </a>
      <a href="/total-time" className={url.includes(Pages.TotalTimeCharts) ? 'active' : ''}>
        Total Times
      </a>
      <a href="/prwr" className={url.includes(Pages.PRSRCharts) ? 'active' : ''}>
        PRWR
      </a>
      <a href="/charts" className={url.includes(Pages.TrackCharts) ? 'active' : ''}>
        Charts
      </a>
      <a href="/players" className={url.includes(Pages.Players) ? 'active' : ''}>
        Players A-Z
      </a>
    </div>
  );
};

export default Navbar;
