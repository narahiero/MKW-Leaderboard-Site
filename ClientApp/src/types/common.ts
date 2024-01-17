import { Country, Track } from "./enums";

export interface Time {
    id: number;
    playerId: number;
    track: Track;
    glitch: boolean;
    flap: boolean;
    runTime: number;
    link: string;
    ghost: string;
    obsoleted: boolean;
    rank: number;
}

export interface Player {
    id: number;
    name: string;
    country: Country;
    town: string;
    otherInfo: string;
    discord: string;
    ppProofStatus: string;
}

export interface LeaderBoardTimeEntry {
    time: Time;
    player: Player;
}

export interface Top10TableProps {
    top10s: LeaderBoardTimeEntry[];
}

export interface ChartTableProps {
    charts: LeaderBoardTimeEntry[];
    page: number;
}

export interface PlayerTableProps {
    players: Player[];
}

export interface PlayerInfoTableProps {
    player?: Player;
}

export interface PlayerViewProps {
    playerId: string;
  }

export interface TimeSheetTableProps {
    times: Time[];
    header: string;
}