import axios from 'axios';
import { checkResponse } from './helpers';
import { Time } from '../types/common';
import { TimeSheetFilter } from '../types/filters';

export const getTimeSheet = (filter: TimeSheetFilter): Promise<Time[]> => axios(
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