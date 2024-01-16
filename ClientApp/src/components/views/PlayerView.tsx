import React, { useEffect, useState } from 'react';
import { Player, PlayerViewProps, Time } from '../../types/common';
import '../App.css';
import Navbar from '../common/Navbar';
import { getTimeSheet } from '../../client/timesheets';
import { TimeSheetFilter } from '../../types/filters';
import TimeSheetTable from '../tables/TimeSheetTable';
import { getPlayer } from '../../client/players';
import PlayerInfoTable from '../tables/PlayerInfoTable';

const PlayerView: React.FC<PlayerViewProps> = ({ playerId }) => {
  const [playerState, setPlayerState] = useState<Player>();
  const [ng3LapTimeSheet, setNG3LapTimeSheet] = useState<Time[]>([]);
  const [g3LapTimeSheet, setG3LapTimeSheet] = useState<Time[]>([]);
  const [ngFlapTimeSheet, setNGFlapTimeSheet] = useState<Time[]>([]);
  const [gFlapTimeSheet, setGFlapTimeSheet] = useState<Time[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const numericPlayerId = parseInt(playerId, 10);
      if (!isNaN(numericPlayerId)) {
        const player = await getPlayer(numericPlayerId);
        setPlayerState(player);
      }

      const ng3lapfilter: TimeSheetFilter = {
        playerId: numericPlayerId,
        glitch: false,
        flap: false
      };
      const g3lapfilter: TimeSheetFilter = {
        playerId: numericPlayerId,
        glitch: true,
        flap: false
      };
      const ngflapfilter: TimeSheetFilter = {
        playerId: numericPlayerId,
        glitch: false,
        flap: true
      };
      const gflapfilter: TimeSheetFilter = {
        playerId: numericPlayerId,
        glitch: true,
        flap: true
      };
      const ng3lap = await getTimeSheet(ng3lapfilter);
      const g3lap = await getTimeSheet(g3lapfilter);
      const ngflap = await getTimeSheet(ngflapfilter);
      const gflap = await getTimeSheet(gflapfilter);
      setNG3LapTimeSheet(ng3lap);
      setG3LapTimeSheet(g3lap);
      setNGFlapTimeSheet(ngflap);
      setGFlapTimeSheet(gflap);
    };

    fetchData();
  }, [playerId]);

  return (
    <div>
      <Navbar />
      <div className="playerinfo-container">
        <PlayerInfoTable player={playerState} />
      </div>
      <div className="timesheet-container">
        <TimeSheetTable times={ng3LapTimeSheet} header="Non-SC - 3Lap"/>
        <TimeSheetTable times={g3LapTimeSheet} header="Unrestricted - 3Lap"/>
        <TimeSheetTable times={ngFlapTimeSheet} header="Non-SC - Flap"/>
        <TimeSheetTable times={gFlapTimeSheet} header="Unrestricted - Flap"/>
      </div>
    </div>
  );
};

export default PlayerView;
