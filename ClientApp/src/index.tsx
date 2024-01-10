import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';

const mount = document.getElementById('mount');
const root = createRoot(mount!);

const AppWithCallbackAfterRender = (): JSX.Element => {
  if (!mount) {
    console.error('No mountpoint found!');
    return <h1>No mountpoint found!</h1>;
  }

  return <App />;
};

root.render(<AppWithCallbackAfterRender />);
