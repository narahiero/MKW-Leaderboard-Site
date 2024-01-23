import React from 'react';
import { createRoot } from 'react-dom/client';
import { Top10sView, AFView, TotalTimeView, ChartsView, PlayersView, PlayerView, LeaderboardChartsView, WRView } from './components/views';
import { Pages } from './types';

const mount = document.getElementById('mount');
const root = createRoot(mount!);

type ViewsConfig = {
  [page in Pages]: React.ComponentType<any>;
};

const viewsConfig: ViewsConfig = {
  [Pages.Top10s]: Top10sView,
  [Pages.WorldRecords]: WRView,
  [Pages.Leaderboards]: LeaderboardChartsView,
  [Pages.AFCharts]: AFView,
  [Pages.TotalTimeCharts]: TotalTimeView,
  [Pages.TrackCharts]: ChartsView,
  [Pages.Players]: PlayersView,
  [Pages.Player]: PlayerView
};

const AppWithCallbackAfterRender = (): JSX.Element => {
  if (!mount) {
    console.error('No mountpoint found!');
    return <h1>No mountpoint found!</h1>;
  }

  const currentPath = window.location.pathname;

  if (currentPath.startsWith(Pages.Player + "/")) {
    const playerId = currentPath.split('/')[2];
    return <PlayerView playerId={playerId} />;
  }

  const CurrentView = viewsConfig[currentPath as Pages] || viewsConfig[Pages.Top10s];
  return <CurrentView />;
};

root.render(<AppWithCallbackAfterRender />);
