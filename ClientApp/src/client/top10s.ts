import axios from 'axios';
import { checkResponse } from './helpers';
import { LeaderBoardTimeEntry } from '../types/common';
import { TimeFilter } from '../types/filters';


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