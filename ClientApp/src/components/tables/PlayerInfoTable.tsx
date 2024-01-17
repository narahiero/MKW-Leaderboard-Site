import React from 'react';
import '../App.css';
import {
  Table,
  TableBody as Body,
  TableRow as Row,
  TableCell as Cell,
} from '@mui/material';
import { Country } from '../../types/enums'
import { PlayerInfoTableProps } from '../../types/common';

const PlayerInfoTable: React.FC<PlayerInfoTableProps> = ({player}) => {
  if(!player) {
    return null;
  }
  return (
    <div className="playerinfo-table">
    <h2><img src={`/assets/flags/${Country[player.country]}.png`} alt={Country[player.country]} style={{ width: '3.5vh', height: '2vh' }} /> {player.name}</h2>
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
