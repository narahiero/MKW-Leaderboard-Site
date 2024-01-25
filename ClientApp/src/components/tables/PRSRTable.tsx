import React from 'react';
import '../App.css';
import {
  Table,
  TableBody as Body,
  TableRow as Row,
  TableCell as Cell,
} from '@mui/material';
import { calculatePRSRRank } from '../../utils';
import { Country, PRSRTableProps, PRSRChartRow } from '../../types';

const PRSRTable: React.FC<PRSRTableProps> = ({charts}) => {
  return (
    <div className="prsr-table">
    <h2>PRWR</h2>
    <Table>
        <th>Rank</th>
        <th>Country</th>
        <th>Player</th>
        <th>Score</th>
        <Body>
        {charts.map((row: PRSRChartRow) => (
            <Row key={row.playerId}>
            <Cell>{calculatePRSRRank(row, charts)}</Cell>
            <Cell><img src={`/assets/flags/${Country[row.country]}.png`} alt={Country[row.country]} style={{ width: '3.5vh', height: '2vh' }} /></Cell>
            <Cell className="nobr"><a href={`/player/${row.playerId}`}>{row.name}</a></Cell>
            <Cell>{(row.prsr*100).toFixed(4)}</Cell>
            </Row>
        ))}
        </Body>
    </Table>
    </div>
  );
};

export default PRSRTable;
