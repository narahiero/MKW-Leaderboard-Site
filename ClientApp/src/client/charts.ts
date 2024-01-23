import axios from 'axios';
import { checkResponse } from './helpers';
import { TimeFilter, LeaderBoardTimeEntry, PlayerChartFilter, AFChartRow, TotalTimeChartRow, LeaderboardChartFilter, LeaderboardChartRow, WRFilter, WRRow } from '../types';

export const getCharts = (filter: TimeFilter): Promise<LeaderBoardTimeEntry[]> => axios(
    `/api/time/track-charts`,
    {
      method: 'POST',
      data: JSON.stringify(filter),
      headers: {
        'Content-Type': 'application/json'
      }
    }
).then(checkResponse)
.then(e => e.data);

export const getChartsQuantity = (filter: TimeFilter): Promise<number> => axios(
    `/api/time/track-charts-quantity`,
    {
      method: 'POST',
      data: JSON.stringify(filter),
      headers: {
        'Content-Type': 'application/json'
      }
    }
).then(checkResponse)
.then(e => e.data);

export const getAFCharts = (filter: PlayerChartFilter): Promise<AFChartRow[]> => axios(
    `/api/time/af-charts`,
    {
      method: 'POST',
      data: JSON.stringify(filter),
      headers: {
        'Content-Type': 'application/json'
      }
    }
).then(checkResponse)
.then(e => e.data);

export const getTotalTimeCharts = (filter: PlayerChartFilter): Promise<TotalTimeChartRow[]> => axios(
    `/api/time/total-time-charts`,
    {
      method: 'POST',
      data: JSON.stringify(filter),
      headers: {
        'Content-Type': 'application/json'
      }
    }
).then(checkResponse)
.then(e => e.data);

export const getLeaderboardCharts = (filter: LeaderboardChartFilter): Promise<LeaderboardChartRow[]> => axios(
    `/api/time/leaderboard-charts`,
    {
      method: 'POST',
      data: JSON.stringify(filter),
      headers: {
        'Content-Type': 'application/json'
      }
    }
).then(checkResponse)
.then(e => e.data);

export const getRecordHolderCharts = (filter: LeaderboardChartFilter): Promise<LeaderboardChartRow[]> => axios(
  `/api/time/record-holder-charts`,
  {
    method: 'POST',
    data: JSON.stringify(filter),
    headers: {
      'Content-Type': 'application/json'
    }
  }
).then(checkResponse)
.then(e => e.data);

export const getRecordHolderChartsByWRFilter = (filter: WRFilter): Promise<LeaderboardChartRow[]> => axios(
  `/api/time/record-holder-charts-wr-filter`,
  {
    method: 'POST',
    data: JSON.stringify(filter),
    headers: {
      'Content-Type': 'application/json'
    }
  }
).then(checkResponse)
.then(e => e.data);

export const getWorldRecords = (filter: WRFilter): Promise<WRRow[]> => axios(
  `/api/time/wrs`,
  {
    method: 'POST',
    data: JSON.stringify(filter),
    headers: {
      'Content-Type': 'application/json'
    }
  }
).then(checkResponse)
.then(e => e.data);