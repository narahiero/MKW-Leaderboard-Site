import React from 'react';
import { createRoot } from 'react-dom/client';
import ChartsView from './components/views/ChartsView';
import Top10sView from './components/views/Top10sView';
import { Pages } from './types/enums';

const mount = document.getElementById('mount');
const root = createRoot(mount!);

type ViewsConfig = {
  [page in Pages]: React.ComponentType<any>;
};

const viewsConfig: ViewsConfig = {
  [Pages.Top10s]: Top10sView,
  [Pages.Charts]: ChartsView,
  // Add more views here as needed
};

const AppWithCallbackAfterRender = (): JSX.Element => {
  if (!mount) {
    console.error('No mountpoint found!');
    return <h1>No mountpoint found!</h1>;
  }

  // Get the current URL path
  const currentPath = window.location.pathname;

  // Find the corresponding component for the current path or use the default view
  const CurrentView = viewsConfig[currentPath as Pages] || viewsConfig[Pages.Top10s];

  return <CurrentView />;
};

root.render(<AppWithCallbackAfterRender />);
