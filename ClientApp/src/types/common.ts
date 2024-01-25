import { Country, Pages, Track } from "./enums";

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
    prsr: number;
}

export interface TimeSheet {
    times: Time[];
    af: number;
    totalTime: number;
    prsr: number;
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

export interface AFChartRow {
    playerId: number;
    name: string;
    country: Country;
    af: number;
}

export interface PRSRChartRow {
    playerId: number;
    name: string;
    country: Country;
    prsr: number;
}

export interface TotalTimeChartRow {
    playerId: number;
    name: string;
    country: Country;
    totalTime: number;
}

export interface LeaderboardChartRow {
    playerId: number;
    name: string;
    country: Country;
    tally: number;
}

export interface WRRow {
    playerId: number;
    name: string;
    country: Country;
    track: Track;
    runTime: number;
    link: string;
    ghost: string;
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
    timesheet: TimeSheet | undefined;
    header: string;
    footer: string;
    totalAF: number;
    totalTotalTime: number;
    totalPRSR: number;
}

export interface AFTableProps {
    charts: AFChartRow[]
}

export interface PRSRTableProps {
    charts: PRSRChartRow[]
}

export interface TotalTimeTableProps {
    charts: TotalTimeChartRow[]
}

export interface LeaderboardChartProps {
    charts: LeaderboardChartRow[]
}

export interface WRChartProps {
    charts: WRRow[]
}

export interface NavbarProps {
    url: Pages
}