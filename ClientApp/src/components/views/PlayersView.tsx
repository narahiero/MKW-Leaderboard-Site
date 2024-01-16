import React, { useEffect, useState } from 'react';
import { getPlayers } from '../../client/players';
import { Player } from '../../types/common';
import '../App.css';
import Navbar from '../common/Navbar';
import PlayerTable from '../tables/PlayerTable';

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
    <div>
      <Navbar />
      <div className="table-container">
        <PlayerTable players={players} />
      </div>
    </div>
  );
};

export default PlayersView;
