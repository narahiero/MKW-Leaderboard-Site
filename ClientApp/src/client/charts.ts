import axios from 'axios';
import { checkResponse } from './helpers';
import { LeaderBoardTimeEntry } from '../types/common';
import { TimeFilter } from '../types/filters';

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