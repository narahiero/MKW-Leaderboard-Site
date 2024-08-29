import React from 'react';
import '../App.css';
import {
  Table,
  TableBody as Body,
  TableRow as Row,
  TableCell as Cell,
} from '@mui/material';
import { FlagIcon } from '../common';
import { formatTime } from '../../utils';
import { LongTrack, WRChartProps, WRRow } from '../../types';

const WRCharts: React.FC<WRChartProps> = ({charts}) => {
  return (
    <div className="wr-table">
      <h2>Records</h2>
      <h3>The best times finished on each category for the given region.</h3>
      <Table>
        <th>Track</th>
        <th>Country</th>
        <th>Player</th>
        <th>Time</th>
        <th>Ghost</th>
        <Body>
          {charts.map((entry: WRRow) => (
            <Row key={entry.track}>
              <Cell className="nobr">{LongTrack[entry.track]}</Cell>
              <Cell><FlagIcon country={entry.country} /></Cell>
              <Cell className="nobr"><a href={`/player/${entry.playerId}`}>{entry.name}</a></Cell>
              <Cell>{formatTime(entry.runTime, entry.link)}</Cell>
              <Cell>
                {entry.ghost && (
                  <a href={entry.ghost} target="_blank" rel="noopener noreferrer">
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

export default WRCharts;
