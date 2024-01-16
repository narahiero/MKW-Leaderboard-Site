import React from 'react';
import '../App.css';
import {
  Table,
  TableBody as Body,
  TableRow as Row,
  TableCell as Cell,
} from '@mui/material';
import { LongTrack } from '../../types/enums'
import { formatTime } from '../../utils/formatters';
import { Time, TimeSheetTableProps } from '../../types/common';

const TimeSheetTable: React.FC<TimeSheetTableProps> = ({times, header}) => {
  if(times.length === 0) {
    return null;
  }
  return (
    <div className="chart-table">
    <Table>
        <Body>
        <h3 className="category-header">{header}</h3>
        {times.map((time: Time) => (
            <Row key={time.id}>
            <Cell className="nobr">{LongTrack[time.track]}</Cell>
            <Cell>{formatTime(time)}</Cell>
            <Cell>
                {time.ghost && (
                <a href={time.ghost} target="_blank" rel="noopener noreferrer">
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

export default TimeSheetTable;
