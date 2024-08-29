import React from 'react';
import '../App.css';
import {
  Table,
  TableBody as Body,
  TableRow as Row,
  TableCell as Cell,
} from '@mui/material';
import { TimeSheetTableProps, LongTrack } from '../../types';
import { formatTime, formatTotalTime } from '../../utils';

const TimeSheetTable: React.FC<TimeSheetTableProps> = ({ timesheet, header, footer, totalAF, totalTotalTime, totalPRSR }) => {
  if(!timesheet) {
    return null;
  }
  return (
    <div className="timesheet-table">
      <h2 className="centered">{header}</h2>
      <Table>
        <th>Track</th>
        <th>Time</th>
        <th>Ghost</th>
        <th>Rank</th>
        <th>PRSR</th>
        <Body>
          {Object.keys(LongTrack).filter(key => typeof LongTrack[key as any] === 'string').map((trackKey) => {
            const index = parseInt(trackKey, 10);
            const timeEntry = timesheet.times.find((time) => time.track === index);
            return (
              <Row key={index}>
                <Cell className="nobr">{LongTrack[index]}</Cell>
                <Cell>{timeEntry ? formatTime(timeEntry.runTime, timeEntry.link) : 'NT'}</Cell>
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
                <Cell>{timeEntry ? `${(timeEntry.prsr * 100).toFixed(2)}%` : '-'}</Cell>
              </Row>
            );
          })}
        </Body>
        <th>Totals</th>
        <th>{formatTotalTime(timesheet.totalTime)}</th>
        <th></th>
        <th>{timesheet.prsr !== 0 ? timesheet.af.toFixed(4) : ''}</th>
        <th>{timesheet.prsr !== 0 ? `${(timesheet.prsr*100).toFixed(2)}%` : ''}</th>
        {totalAF !== 0 && totalTotalTime !== 0 && totalPRSR !== 0 && (
          <>
            <Row>
              <th /><th /><th /><th /><th />
            </Row>
            <Row>
              <th><h2>Overall ({footer})</h2></th>
              <th>{formatTotalTime(totalTotalTime)}</th>
              <th></th>
              <th>{totalAF.toFixed(4)}</th>
              <th>{(totalPRSR*100).toFixed(4)}%</th>
            </Row>
          </>
        )}
      </Table>
    </div>
  );
};

export default TimeSheetTable;
