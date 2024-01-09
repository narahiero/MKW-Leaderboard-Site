import React from 'react';
import {
  Table,
  TableBody as Body,
  TableRow as Row,
  TableCell as Cell,
} from '@mui/material';

interface TimeData {
  minutes: number;
  seconds: number;
  milliseconds: number;
}

interface PlayerData {
    player: string;
    country: string;
    timeData: TimeData;
    link?: string;
    ghost?: string;
  }

interface Top10TableProps {
  title: string;
  data: { country: string; player: string; timeData: TimeData, link?: string, ghost?: string }[];
  glitchData?: { country: string; player: string; timeData: TimeData, link?: string, ghost?: string }[];
}

const calculateRank = (player: PlayerData, data: PlayerData[]): string => {
const sortedData = [...data].sort((a, b) => {
    // Compare times in ascending order
    if (a.timeData.minutes !== b.timeData.minutes) {
    return a.timeData.minutes - b.timeData.minutes;
    }
    if (a.timeData.seconds !== b.timeData.seconds) {
    return a.timeData.seconds - b.timeData.seconds;
    }
    return a.timeData.milliseconds - b.timeData.milliseconds;
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
    sortedData[i].timeData.minutes === player.timeData.minutes &&
    sortedData[i].timeData.seconds === player.timeData.seconds &&
    sortedData[i].timeData.milliseconds === player.timeData.milliseconds
    ) {
    tieCount++;
    } else {
    break; // Break when encountering the first different time
    }
}

// Adjust rank for ties
if (tieCount > 0) {
    rank -= tieCount;
    return `${rank}`;
}

return rank.toString();
};

const formatTime = (time: TimeData, link?: string): JSX.Element => {
  const minutesStr = time.minutes.toString();
  const secondsStr = time.seconds < 10 ? `0${time.seconds}` : time.seconds.toString();
  const millisecondsStr =
    time.milliseconds < 10
      ? `00${time.milliseconds}`
      : time.milliseconds < 100
      ? `0${time.milliseconds}`
      : time.milliseconds.toString();

  const formattedTime = `${minutesStr}:${secondsStr}.${millisecondsStr}`;

  if (link) {
    return (
      <a href={`${link}`} target="_blank" rel="noopener noreferrer">
        {formattedTime}
      </a>
    );
  } else {
    return <span>{formattedTime}</span>;
  }
};

const Top10Table: React.FC<Top10TableProps> = ({ title, data }) => {
  return (
    <div className="top10-table">
      <h2>{title}</h2>
      <Table>
        <Body>
          {data.map((item) => (
            <Row key={item.player}>
              <Cell>{calculateRank(item, data)}</Cell>
              <Cell><img src={`/assets/flags/${item.country}.png`} alt={item.country} style={{ maxWidth: '3vh', maxHeight: '3vh', width: 'auto', height: 'auto' }} /></Cell>
              <Cell>{item.player}</Cell>
              <Cell>{formatTime(item.timeData, item.link)}</Cell>
              <Cell>
                {item.ghost && (
                  <a href={item.ghost} target="_blank" rel="noopener noreferrer">
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
