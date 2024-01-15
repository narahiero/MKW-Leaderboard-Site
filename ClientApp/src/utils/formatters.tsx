import React from 'react'
import { LeaderBoardTimeEntry, Time } from "../types/common";

export const formatTime = (time: Time): JSX.Element => {
  // Convert milliseconds to minutes, seconds, and remaining milliseconds
  const totalSeconds = Math.floor(time.runTime / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  const remainingMilliseconds = time.runTime % 1000;

  // Format the time components
  const secondsStr = seconds < 10 ? `0${seconds}` : seconds.toString();
  const millisecondsStr =
    remainingMilliseconds < 10
      ? `00${remainingMilliseconds}`
      : remainingMilliseconds < 100
      ? `0${remainingMilliseconds}`
      : remainingMilliseconds.toString();

  // Create the formatted time string
  const formattedTime = `${minutes}:${secondsStr}.${millisecondsStr}`;

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



export const calculateRank = (player: LeaderBoardTimeEntry, data: LeaderBoardTimeEntry[]): string => {

const playerIndex = data.findIndex((item) => item === player);

if (playerIndex === -1) {
    // Player not found in the sorted array
    return "N/A";
}

let rank = playerIndex + 1;

// Check for ties by finding the number of players with the same time
let tieCount = 0;
for (let i = playerIndex - 1; i >= 0; i--) {
    if (
      data[i].time.runTime === player.time.runTime
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