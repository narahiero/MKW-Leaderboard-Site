import { Country, Track } from "./enums";

export interface Time {
    id: number;
    playerId: number;
    track: Track;
    glitch: boolean;
    flap: boolean;
    minutes: number;
    seconds: number;
    milliseconds: number;
    link: string;
    ghost: string;
    obsoleted: boolean;
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