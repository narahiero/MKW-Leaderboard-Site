import { Country, Track } from "./enums";

export interface TimeFilter {
    track: Track;
    glitch: boolean;
    flap: boolean;
    countries: Country[];
    page: Page;
}

export interface Page {
    pageNumber: number;
    entriesPerPage: number
}

export interface TimeSheetFilter {
    playerId: number;
    glitch: boolean;
    flap: boolean;
}

export interface PlayerChartFilter {
    glitch: boolean;
    threeLap: boolean;
    flap: boolean;
    all: boolean;
}

export interface LeaderboardChartFilter {
    glitch: boolean;
    threeLap: boolean;
    flap: boolean;
    countries: Country[];
}

export interface WRFilter {
    glitch: boolean;
    flap: boolean;
    countries: Country[];
}