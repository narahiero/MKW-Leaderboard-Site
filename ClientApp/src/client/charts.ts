import axios from 'axios';
import { checkResponse } from './helpers';
import { AFChartRow, LeaderBoardTimeEntry, TotalTimeChartRow } from '../types/common';
import { PlayerChartFilter, TimeFilter } from '../types/filters';

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