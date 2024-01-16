import React from 'react';
import '../App.css';
import {
  Table,
  TableBody as Body,
  TableRow as Row,
  TableCell as Cell,
} from '@mui/material';
import {  Country } from '../../types/enums'
import { Player, PlayerTableProps } from '../../types/common';

const PlayerTable: React.FC<PlayerTableProps> = ({players}) => {
  return (
    <div className="chart-table">
    <h2>Players</h2>
    <Table>
        <Body>
        {players.map((player: Player) => (
            <Row key={player.id}>
            <Cell><img src={`/assets/flags/${Country[player.country]}.png`} alt={Country[player.country]} style={{ width: '3.5vh', height: '2vh' }} /></Cell>
            <Cell className="nobr"><a href={`/player/${player.id}`}>{player.name}</a></Cell>
            </Row>
        ))}
        </Body>
    </Table>
    </div>
  );
};

export default PlayerTable;
