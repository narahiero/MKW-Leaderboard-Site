import React from 'react';
import { NavbarProps, Pages } from '../../types';

const Navbar: React.FC<NavbarProps> = ({ url }) => {
  return (
    <div className="navbar">
      <a href="/top10" className={url === Pages.Top10s ? 'active' : ''}>
        Top 10s
      </a>
      <a href="/records" className={url === Pages.WorldRecords ? 'active' : ''}>
        Records
      </a>
      <a href="/top10rankings" className={url === Pages.Leaderboards ? 'active' : ''}>
        Rankings (Top 10s)
      </a>
      <a href="/af" className={url === Pages.AFCharts ? 'active' : ''}>
        Rankings (AF)
      </a>
      <a href="/total-time" className={url === Pages.TotalTimeCharts ? 'active' : ''}>
        Total Times
      </a>
      <a href="/prwr" className={url === Pages.PRSRCharts ? 'active' : ''}>
        PRWR
      </a>
      <a href="/charts" className={url === Pages.TrackCharts ? 'active' : ''}>
        Charts
      </a>
      <a href="/players" className={url === Pages.Players ? 'active' : ''}>
        Players A-Z
      </a>
    </div>
  );
};

export default Navbar;
