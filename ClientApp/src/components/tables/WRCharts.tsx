import React from 'react';
import '../App.css';
import {
  Table,
  TableBody as Body,
  TableRow as Row,
  TableCell as Cell,
} from '@mui/material';
import { formatTime } from '../../utils';
import { Country, LongTrack, WRChartProps, WRRow } from '../../types';

const WRCharts: React.FC<WRChartProps> = ({charts}) => {
  return (
    <div className="wr-table">
      <h2>Records</h2>
      <Table>
        <th>Track</th>
        <th>Country</th>
        <th>Player</th>
        <th>Time</th>
        <th>Ghost</th>
        <Body>
          {charts.map((entry: WRRow) => (
            <Row key={entry.track}>
              <Cell>{LongTrack[entry.track]}</Cell>
              <Cell><img src={`/assets/flags/${Country[entry.country]}.png`} alt={Country[entry.country]} style={{ width: '3.5vh', height: '2vh' }} /></Cell>
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
