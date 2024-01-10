interface TimeData {
    minutes: number;
    seconds: number;
    milliseconds: number;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface PlayerData {
    player: string;
    country: string;
    timeData: TimeData;
    link?: string;
    ghost?: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface Top10TableProps {
    title: string;
    data: { country: string; player: string; timeData: TimeData, link?: string, ghost?: string }[];
    glitchData?: { country: string; player: string; timeData: TimeData, link?: string, ghost?: string }[];
}