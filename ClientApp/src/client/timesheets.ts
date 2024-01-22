import axios from 'axios';
import { checkResponse } from './helpers';
import { TimeSheetFilter, TimeSheet } from '../types';

export const getTimeSheet = (filter: TimeSheetFilter): Promise<TimeSheet> => axios(
    `/api/time/timesheet`,
    {
      method: 'POST',
      data: JSON.stringify(filter),
      headers: {
        'Content-Type': 'application/json'
      }
    }
).then(checkResponse)
.then(e => e.data);

export const getTotalAF = (filter: TimeSheetFilter): Promise<number> => axios(
    `/api/time/total-af`,
    {
      method: 'POST',
      data: JSON.stringify(filter),
      headers: {
        'Content-Type': 'application/json'
      }
    }
).then(checkResponse)
.then(e => e.data);

export const getTotalTotalTime = (filter: TimeSheetFilter): Promise<number> => axios(
    `/api/time/total-total-time`,
    {
      method: 'POST',
      data: JSON.stringify(filter),
      headers: {
        'Content-Type': 'application/json'
      }
    }
).then(checkResponse)
.then(e => e.data);