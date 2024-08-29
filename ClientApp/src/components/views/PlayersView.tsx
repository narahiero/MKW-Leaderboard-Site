import React, { useEffect, useState } from 'react';
import { getPlayers } from '../../client';
import { Player } from '../../types/common';
import '../App.css';
import { PlayerTable } from '../tables';

const PlayersView = () => {
  const [players, setPlayers] = useState<Player[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedPlayers = await getPlayers();
      setPlayers(fetchedPlayers);
    };

    fetchData();
  }, []);

  return (
    <div className="main">
      <div className="table-container">
        <PlayerTable players={players} />
      </div>
    </div>
  );
};

export default PlayersView;
