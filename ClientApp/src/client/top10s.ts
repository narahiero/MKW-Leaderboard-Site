import axios from 'axios';
import { checkResponse } from './helpers';
import { TimeFilter, LeaderBoardTimeEntry } from '../types';


export const getTop10 = (filter: TimeFilter): Promise<LeaderBoardTimeEntry[]> => axios(
    `/api/time/top10`,
    {
      method: 'POST',
      data: JSON.stringify(filter),
      headers: {
        'Content-Type': 'application/json'
      }
    }
).then(checkResponse)
.then(e => e.data);