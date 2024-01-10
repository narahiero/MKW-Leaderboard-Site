interface Time {
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

interface Player {
    id: number;
    name: string;
    country: Country;
    town: string;
    otherInfo: string;
    discord: string;
    ppProofStatus: string;
}

interface LeaderBoardTimeEntry {
    time: Time;
    player: Player;
}