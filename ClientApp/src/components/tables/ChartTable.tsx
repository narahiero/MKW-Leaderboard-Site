import React from 'react';
import '../App.css';
import {
  Table,
  TableBody as Body,
  TableRow as Row,
  TableCell as Cell,
} from '@mui/material';
import { LongTrack, Country } from '../../types/enums'
import { ChartTableProps, LeaderBoardTimeEntry } from '../../types/common'
import { calculateRank, formatTime } from '../../utils/formatters';
import Sidebar from '../common/Sidebar';

const ChartTable: React.FC<ChartTableProps> = ({charts}) => {
  return (
    <div className="chart-table">
    <h2>{LongTrack[charts[0]?.time.track]}</h2>
    <Table>
        <Body>
        {charts.map((entry: LeaderBoardTimeEntry) => (
            <Row key={entry.player.id}>
            <Cell>{calculateRank(entry, charts)}</Cell>
            <Cell><img src={`/assets/flags/${Country[entry.player.country]}.png`} alt={Country[entry.player.country]} style={{ width: '3.5vh', height: '2vh' }} /></Cell>
            <Cell className="nobr">{entry.player.name}</Cell>
            <Cell>{formatTime(entry.time)}</Cell>
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
