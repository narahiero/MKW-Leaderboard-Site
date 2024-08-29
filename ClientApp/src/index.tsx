import React from 'react';
import { BrowserRouter, Navigate, Route, Routes, useParams } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { Navbar } from './components/common';
import { Pages } from './types';
import { Top10sView, AFView, TotalTimeView, ChartsView, PlayersView, PlayerView, LeaderboardChartsView, WRView, PRSRView } from './components/views';
import { initTheme } from './utils';


// Sync data-theme attribute of the document element
initTheme();

const mount = document.getElementById('mount');
const root = createRoot(mount!);

const App = (): JSX.Element => {
  if (!mount) {
    console.error('No mountpoint found!');
    return <h1>No mountpoint found!</h1>;
  }

  return (
    <BrowserRouter>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Navigate to={Pages.Top10s} replace />} />
          <Route path={Pages.Top10s} element={<Top10sView />} />
          <Route path={Pages.AFCharts} element={<AFView />} />
          <Route path={Pages.TotalTimeCharts} element={<TotalTimeView />} />
          <Route path={Pages.PRSRCharts} element={<PRSRView />} />
          <Route path={Pages.TrackCharts} element={<ChartsView />} />
          <Route path={Pages.Players} element={<PlayersView />} />
          <Route path={`${Pages.Player}/:playerId`} element={<PlayerViewWrapper />} />
          <Route path={Pages.Leaderboards} element={<LeaderboardChartsView />} />
          <Route path={Pages.WorldRecords} element={<WRView />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

const PlayerViewWrapper = () => {
  const { playerId } = useParams<{ playerId: string }>();
  return <PlayerView playerId={playerId} />;
};

root.render(<App />);
