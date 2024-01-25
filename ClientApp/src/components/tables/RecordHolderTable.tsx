import React from 'react';
import '../App.css';
import {
  Table,
  TableBody as Body,
  TableRow as Row,
  TableCell as Cell,
} from '@mui/material';
import { calculateLeaderboardRank } from '../../utils';
import { Country, LeaderboardChartProps, LeaderboardChartRow } from '../../types';

const RecordHolderTable: React.FC<LeaderboardChartProps> = ({charts}) => {
  return (
    <div className="record-holder-table">
    <h2>Record holder rankings</h2>
    <h3>Rankings based on amount of records held.</h3>
    <Table>
        <th>Rank</th>
        <th>Country</th>
        <th>Player</th>
        <th>Tally</th>
        <Body>
        {charts.map((row: LeaderboardChartRow) => (
            <Row key={row.playerId}>
            <Cell>{calculateLeaderboardRank(row, charts)}</Cell>
            <Cell><img src={`/assets/flags/${Country[row.country]}.png`} alt={Country[row.country]} style={{ width: '3.5vh', height: '2vh' }} /></Cell>
            <Cell className="nobr"><a href={`/player/${row.playerId}`}>{row.name}</a></Cell>
            <Cell>{row.tally}</Cell>
            </Row>
        ))}
        </Body>
    </Table>
    </div>
  );
};

export default RecordHolderTable;
