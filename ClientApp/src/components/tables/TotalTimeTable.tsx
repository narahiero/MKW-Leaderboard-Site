import React from 'react';
import '../App.css';
import {
  Table,
  TableBody as Body,
  TableRow as Row,
  TableCell as Cell,
} from '@mui/material';
import { calculateTotalTimeRank, formatTotalTime } from '../../utils';
import { TotalTimeTableProps, TotalTimeChartRow, Country } from '../../types';

const TotalTimeTable: React.FC<TotalTimeTableProps> = ({charts}) => {
  return (
    <div className="total-time-table">
    <h2>Total Time</h2>
    <Table>
        <th>Rank</th>
        <th>Country</th>
        <th>Player</th>
        <th>Total</th>
        <Body>
        {charts.map((row: TotalTimeChartRow) => (
            <Row key={row.playerId}>
            <Cell>{calculateTotalTimeRank(row, charts)}</Cell>
            <Cell><img src={`/assets/flags/${Country[row.country]}.png`} alt={Country[row.country]} style={{ width: '3.5vh', height: '2vh' }} /></Cell>
            <Cell className="nobr"><a href={`/player/${row.playerId}`}>{row.name}</a></Cell>
            <Cell>{formatTotalTime(row.totalTime)}</Cell>
            </Row>
        ))}
        </Body>
    </Table>
    </div>
  );
};

export default TotalTimeTable;
