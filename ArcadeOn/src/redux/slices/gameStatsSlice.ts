import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type GameStat = {
    gameId: string;
    highScore: number;
    totalPlays: number;
    personalBest?: number;
};

export type GameStatsState = { stats: GameStat[] };

const initialState: GameStatsState = { stats: [] };

const gameStatsSlice = createSlice({
    name: "gameStats",
    initialState: initialState,
    reducers: {
        setHighScore(state, action: PayloadAction<{ gameId: string; score: number }>) {
            const gs = state.stats.find(g => g.gameId === action.payload.gameId);
            if (gs) { gs.highScore = Math.max(gs.highScore, action.payload.score); }
            else {
                state.stats.push({ gameId: action.payload.gameId, highScore: action.payload.score, totalPlays: 0 });
            }
        },
        addPlay(state, action: PayloadAction<string>) {
            const gs = state.stats.find(g => g.gameId === action.payload);
            if (gs) { gs.totalPlays += 1; }
        },
        setPersonalBest(state, action: PayloadAction<{ gameId: string; personalBest: number }>) {
            const gs = state.stats.find(g => g.gameId === action.payload.gameId);
            if (gs) { gs.personalBest = action.payload.personalBest; }
        },
        clearStats(state) { state.stats = []; },
        removeGameStats(state, action: PayloadAction<string>) {
            state.stats = state.stats.filter(g => g.gameId !== action.payload);
        },
        setStats(state, action: PayloadAction<GameStat[]>) { state.stats = action.payload; }
    }
});

export const gameStatsActions = gameStatsSlice.actions;
export default gameStatsSlice.reducer;
