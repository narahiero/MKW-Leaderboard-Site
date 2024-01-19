import React from 'react';
import { createRoot } from 'react-dom/client';
import ChartsView from './components/views/ChartsView';
import Top10sView from './components/views/Top10sView';
import { Pages } from './types/enums';
import PlayersView from './components/views/PlayersView';
import PlayerView from './components/views/PlayerView';
import AFView from './components/views/AFView';

const mount = document.getElementById('mount');
const root = createRoot(mount!);

type ViewsConfig = {
  [page in Pages]: React.ComponentType<any>;
};

const viewsConfig: ViewsConfig = {
  [Pages.Top10s]: Top10sView,
  [Pages.Charts]: ChartsView,
  [Pages.Players]: PlayersView,
  [Pages.Player]: PlayerView,
  [Pages.AFCharts]: AFView
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
