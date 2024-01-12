import React from 'react';
import '../App.css';
import {
  Table,
  TableBody as Body,
  TableRow as Row,
  TableCell as Cell,
} from '@mui/material';
import { LongTrack, Country } from '../../types/enums'
import { Top10TableProps, LeaderBoardTimeEntry, Time } from '../../types/common'

const calculateRank = (player: LeaderBoardTimeEntry, data: LeaderBoardTimeEntry[]): string => {
const sortedData = [...data].sort((a, b) => {
    // Compare times in ascending order
    if (a.time.minutes !== b.time.minutes) {
    return a.time.minutes - b.time.minutes;
    }
    if (a.time.seconds !== b.time.seconds) {
    return a.time.seconds - b.time.seconds;
    }
    return a.time.milliseconds - b.time.milliseconds;
});

const playerIndex = sortedData.findIndex((item) => item === player);

if (playerIndex === -1) {
    // Player not found in the sorted array
    return "N/A";
}

let rank = playerIndex + 1;

// Check for ties by finding the number of players with the same time
let tieCount = 0;
for (let i = playerIndex - 1; i >= 0; i--) {
    if (
    sortedData[i].time.minutes === player.time.minutes &&
    sortedData[i].time.seconds === player.time.seconds &&
    sortedData[i].time.milliseconds === player.time.milliseconds
    ) {
    tieCount++;
    } else {
    break; // Break when encountering the first different time
    }
}

// Adjust rank for ties
if (tieCount > 0) {
    rank -= tieCount;
    let result = `${rank}`;

    if(rank !== 10) {
      result += " "; //add extra space to make table width consistent (there will effectively always be 1 double character rank)
    }
    return result
}

return rank.toString();
};

const formatTime = (time: Time): JSX.Element => {
  const minutesStr = time.minutes.toString();
  const secondsStr = time.seconds < 10 ? `0${time.seconds}` : time.seconds.toString();
  const millisecondsStr =
    time.milliseconds < 10
      ? `00${time.milliseconds}`
      : time.milliseconds < 100
      ? `0${time.milliseconds}`
      : time.milliseconds.toString();

  const formattedTime = `${minutesStr}:${secondsStr}.${millisecondsStr}`;

  if (time.link) {
    return (
      <a href={`${time.link}`} target="_blank" rel="noopener noreferrer">
        {formattedTime}
      </a>
    );
  } else {
    return <span>{formattedTime}</span>;
  }
};

const Top10Table: React.FC<Top10TableProps> = ({top10s}) => {
  console.log(top10s)
  return (
    <div className="top10-table">
      <h2>{LongTrack[top10s[0]?.time.track]}</h2>
      <Table>
        <Body>
          {top10s.map((entry: LeaderBoardTimeEntry) => (
            <Row key={entry.player.id}>
              <Cell>{calculateRank(entry, top10s)}</Cell>
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

export default Top10Table;
