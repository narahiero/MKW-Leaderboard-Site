import React from 'react';
import '../App.css';
import {
  Table,
  TableBody as Body,
  TableRow as Row,
  TableCell as Cell,
} from '@mui/material';
import { calculateRank, formatTime } from '../../utils';
import { ChartTableProps, LongTrack, LeaderBoardTimeEntry, Country } from '../../types';

const ChartTable: React.FC<ChartTableProps> = ({charts, page}) => {
  return (
    <div className="chart-table">
    <h2>{LongTrack[charts[0]?.time.track]}</h2>
    <Table>
        <th>Rank</th>
        <th>Country</th>
        <th>Player</th>
        <th>Time</th>
        <th>Ghost</th>
        <Body>
        {charts.map((entry: LeaderBoardTimeEntry) => (
            <Row key={entry.player.id}>
            <Cell>{calculateRank(entry, charts, page)}</Cell>
            <Cell><img src={`/assets/flags/${Country[entry.player.country]}.png`} alt={Country[entry.player.country]} style={{ width: '3.5vh', height: '2vh' }} /></Cell>
            <Cell className="nobr"><a href={`/player/${entry.player.id}`}>{entry.player.name}</a></Cell>
            <Cell>{formatTime(entry.time.runTime, entry.time.link)}</Cell>
            <Cell>
                {entry.time.ghost && (
                <a href={entry.time.ghost} target="_blank" rel="noopener noreferrer">
                    <img src="/assets/ghost.png" alt="Ghost" style={{ width: '20px', height: '20px' }} />
                </a>
                )}
            </Cell>
            </Row>
        ))}
        </Body>
    </Table>
    </div>
  );
};

export default ChartTable;
