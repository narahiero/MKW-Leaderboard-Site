import React, { useEffect, useState } from 'react';
import '../App.css';
import { getTimeSheet, getTotalAF, getTotalTotalTime, getPlayer, getTotalPRSR } from '../../client';
import { TimeSheetTable, PlayerInfoTable } from '../tables';
import { PlayerViewProps, Player, TimeSheet, TimeSheetFilter } from '../../types';

const PlayerView: React.FC<PlayerViewProps> = ({ playerId }) => {
  const [playerState, setPlayerState] = useState<Player>();
  const [ng3LapTimeSheet, setNG3LapTimeSheet] = useState<TimeSheet>();
  const [g3LapTimeSheet, setG3LapTimeSheet] = useState<TimeSheet>();
  const [ngFlapTimeSheet, setNGFlapTimeSheet] = useState<TimeSheet>();
  const [gFlapTimeSheet, setGFlapTimeSheet] = useState<TimeSheet>();
  const [totalNGAF, setTotalNGAF] = useState<number>(0);
  const [totalNGTotalTime, setTotalNGTotalTime] = useState<number>(0);
  const [totalNGPRSR, setTotalNGPRSR] = useState<number>(0);
  const [totalGAF, setTotalGAF] = useState<number>(0);
  const [totalGTotalTime, setTotalGTotalTime] = useState<number>(0);
  const [totalGPRSR, setTotalGPRSR] = useState<number>(0);

  useEffect(() => {
    const fetchData = async () => {
      const numericPlayerId = parseInt(playerId!, 10);

      if (isNaN(numericPlayerId)) {
        return;
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
      const player = await getPlayer(numericPlayerId);
      const ng3lap = await getTimeSheet(ng3lapfilter);
      const g3lap = await getTimeSheet(g3lapfilter);
      setPlayerState(player);
      setG3LapTimeSheet(g3lap);
      setNG3LapTimeSheet(ng3lap);
      const ngflap = await getTimeSheet(ngflapfilter);
      const gflap = await getTimeSheet(gflapfilter);
      setNGFlapTimeSheet(ngflap);
      setGFlapTimeSheet(gflap);
      const totalNGAF = await getTotalAF(ng3lapfilter);
      const totalGAF = await getTotalAF(g3lapfilter);
      const totalNGTotalTime = await getTotalTotalTime(ng3lapfilter);
      const totalGTotalTime = await getTotalTotalTime(g3lapfilter);
      const totalNGPRSR = await getTotalPRSR(ng3lapfilter);
      const totalGPRSR = await getTotalPRSR(g3lapfilter);
      setTotalNGAF(totalNGAF);
      setTotalGAF(totalGAF);
      setTotalNGTotalTime(totalNGTotalTime);
      setTotalGTotalTime(totalGTotalTime);
      setTotalNGPRSR(totalNGPRSR);
      setTotalGPRSR(totalGPRSR);
    };

    fetchData();
  }, [playerId]);

  if(!playerId) {
    return null;
  }

  return (
    <div className="main">
      <PlayerInfoTable player={playerState} />
      <div className="table-container">
        <TimeSheetTable timesheet={ng3LapTimeSheet} header="Non-SC - 3Lap" totalAF={0} totalTotalTime={0} totalPRSR={0} footer={''}/>
        <TimeSheetTable timesheet={g3LapTimeSheet} header="Unrestricted - 3Lap" totalAF={0} totalTotalTime={0} totalPRSR={0} footer={''}/>
        <TimeSheetTable timesheet={ngFlapTimeSheet} header="Non-SC - Flap" totalAF={totalNGAF} totalTotalTime={totalNGTotalTime} totalPRSR={totalNGPRSR} footer={'Non-SC'}/>
        <TimeSheetTable timesheet={gFlapTimeSheet} header="Unrestricted - Flap" totalAF={totalGAF} totalTotalTime={totalGTotalTime} totalPRSR={totalGPRSR} footer={'Unrestricted'}/>
      </div>
    </div>
  );
};

export default PlayerView;
