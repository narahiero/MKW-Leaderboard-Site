import React from 'react';
import '../App.css';
import {
  Table,
  TableBody as Body,
  TableRow as Row,
  TableCell as Cell,
} from '@mui/material';
import { LongTrack } from '../../types/enums';
import { formatTime, formatTotalTime } from '../../utils/formatters';
import { TimeSheetTableProps } from '../../types/common';

const TimeSheetTable: React.FC<TimeSheetTableProps> = ({ timesheet, header, footer, totalAF, totalTotalTime }) => {
  if(!timesheet) {
    return null;
  }
  return (
    <div className="chart-table">
    <h2 className="category-header">{header}</h2>
      <Table>
        <th>Track</th>
        <th>Time</th>
        <th>Ghost</th>
        <th>Rank</th>
        <Body>
          {Object.keys(LongTrack).filter(key => typeof LongTrack[key as any] === 'string').map((trackKey) => {
            const index = parseInt(trackKey, 10);
            const timeEntry = timesheet.times.find((time) => time.track === index);
            return (
              <Row key={index}>
                <Cell className="nobr">{LongTrack[index]}</Cell>
                <Cell>{timeEntry ? formatTime(timeEntry) : 'NT'}</Cell>
                <Cell>
                  {timeEntry && timeEntry.ghost && (
                    <a
                      href={timeEntry.ghost}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="/assets/ghost.png"
                        alt="Ghost"
                        style={{ width: '20px', height: '20px' }}
                      />
                    </a>
                  )}
                </Cell>
                <Cell>{timeEntry ? timeEntry.rank : '-'}</Cell>
              </Row>
            );
          })}
        </Body>
        <th>Totals</th>
        <th>{formatTotalTime(timesheet.totalTime)}</th>
        <th></th>
        <th>{timesheet.af.toFixed(4)}</th>
        {totalAF !== 0 && totalTotalTime !== 0 && (
        <><Row>
            <th></th><th></th><th></th><th></th>
          </Row><Row>
              <th><h2>Overall ({footer})</h2></th>
              <th>{formatTotalTime(totalTotalTime)}</th>
              <th></th>
              <th><h1>{totalAF.toFixed(4)}</h1></th>
            </Row></>
      )}
      </Table>
    </div>
  );
};

export default TimeSheetTable;
