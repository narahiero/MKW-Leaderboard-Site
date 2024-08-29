import React from 'react';
import '../App.css';
import {
  Table,
  TableBody as Body,
  TableRow as Row,
  TableCell as Cell,
} from '@mui/material';
import { FlagIcon } from '../common';
import { PlayerTableProps, Player } from '../../types';

const PlayerTable: React.FC<PlayerTableProps> = ({players}) => {
  return (
    <div className="player-table">
      <h2>Players</h2>
      <Table>
        <th>Country</th>
        <th>Player</th>
        <Body>
          {players.map((player: Player) => (
            <Row key={player.id}>
              <Cell><FlagIcon country={player.country} /></Cell>
              <Cell className="nobr"><a href={`/player/${player.id}`}>{player.name}</a></Cell>
            </Row>
          ))}
        </Body>
      </Table>
    </div>
  );
};

export default PlayerTable;
