import axios from 'axios';
import { checkResponse } from './helpers';
import { LeaderBoardTimeEntry } from '../types/common';
import { Track } from '../types/enums';


export const getTop10 = (track: Track, glitch: boolean, flap: boolean): Promise<LeaderBoardTimeEntry[]> => axios(
    `/api/time/top10/${track}/glitch/${glitch}/flap/${flap}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }
).then(checkResponse)
.then(e => e.data);