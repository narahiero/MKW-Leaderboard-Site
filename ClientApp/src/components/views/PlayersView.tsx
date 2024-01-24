import React, { useEffect, useState } from 'react';
import { getPlayers } from '../../client';
import { Player } from '../../types/common';
import '../App.css';
import { Navbar } from '../common';
import { PlayerTable } from '../tables';
import { Pages } from '../../types';

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
      <Navbar url={Pages.Players}/>
      <div className="table-container">
        <PlayerTable players={players} />
      </div>
    </div>
  );
};

export default PlayersView;
