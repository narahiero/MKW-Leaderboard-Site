import React from 'react';
import '../App.css';
import {
  Table,
  TableBody as Body,
  TableRow as Row,
  TableCell as Cell,
} from '@mui/material';
import { FlagIcon } from '../common';
import { PlayerInfoTableProps } from '../../types';

const PlayerInfoTable: React.FC<PlayerInfoTableProps> = ({player}) => {
  if(!player) {
    return null;
  }
  return (
    <div className="playerinfo-table">
      <h2 className="centered"><FlagIcon country={player.country} /> {player.name}</h2>
      <Table key={player.id}>
        <Body>
          <Row>
            <Cell>Town</Cell>
            <Cell>{player.town}</Cell>
          </Row>
          <Row>
            <Cell>Discord</Cell>
            <Cell>{player.discord}</Cell>
          </Row>
          <Row>
            <Cell>Info</Cell>
            <Cell>{player.otherInfo}</Cell>
          </Row>
         </Body>
      </Table>
    </div>
  );
};

export default PlayerInfoTable;
