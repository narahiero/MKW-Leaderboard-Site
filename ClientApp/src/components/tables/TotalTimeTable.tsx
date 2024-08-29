import React from 'react';
import '../App.css';
import {
  Table,
  TableBody as Body,
  TableRow as Row,
  TableCell as Cell,
} from '@mui/material';
import { FlagIcon } from '../common';
import { calculateTotalTimeRank, formatTotalTime } from '../../utils';
import { TotalTimeTableProps, TotalTimeChartRow } from '../../types';

const TotalTimeTable: React.FC<TotalTimeTableProps> = ({charts}) => {
  return (
    <div className="total-time-table">
      <h2>Total Time</h2>
      <h3>This ranking displays the sum of times on each given category. You must have finished a run on every category to qualify for these rankings.</h3>
      <Table>
        <th>Rank</th>
        <th>Country</th>
        <th>Player</th>
        <th>Total</th>
        <Body>
          {charts.map((row: TotalTimeChartRow) => (
            <Row key={row.playerId}>
              <Cell>{calculateTotalTimeRank(row, charts)}</Cell>
              <Cell><FlagIcon country={row.country} /></Cell>
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
