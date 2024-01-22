import axios from 'axios';
import { checkResponse } from './helpers';
import { Player } from '../types';

export const getPlayers = (): Promise<Player[]> => axios(
    `/api/player`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }
).then(checkResponse)
.then(e => e.data);

export const getPlayer = (id: number): Promise<Player> => axios(
    `/api/player/${id}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }
).then(checkResponse)
.then(e => e.data);