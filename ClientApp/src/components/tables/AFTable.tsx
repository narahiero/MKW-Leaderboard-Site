import React from 'react';
import '../App.css';
import {
  Table,
  TableBody as Body,
  TableRow as Row,
  TableCell as Cell,
} from '@mui/material';
import { Country } from '../../types/enums'
import { AFChartRow, AFTableProps } from '../../types/common'
import { calculateAFRank } from '../../utils/formatters';

const AFTable: React.FC<AFTableProps> = ({charts}) => {
  return (
    <div className="af-table">
    <h2>AF</h2>
    <Table>
        <th>Rank</th>
        <th>Country</th>
        <th>Player</th>
        <th>Score</th>
        <Body>
        {charts.map((row: AFChartRow) => (
            <Row key={row.playerId}>
            <Cell>{calculateAFRank(row, charts)}</Cell>
            <Cell><img src={`/assets/flags/${Country[row.country]}.png`} alt={Country[row.country]} style={{ width: '3.5vh', height: '2vh' }} /></Cell>
            <Cell className="nobr"><a href={`/player/${row.playerId}`}>{row.name}</a></Cell>
            <Cell>{row.af}</Cell>
            </Row>
        ))}
        </Body>
    </Table>
    </div>
  );
};

export default AFTable;
