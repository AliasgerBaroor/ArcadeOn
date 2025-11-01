import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Achievement = { id: string; name: string; achievedAt?: string; };
export type Redemption = { id: string; rewardId: string; pointsSpent: number; status: "pending" | "completed" | "failed"; redeemedAt: string; };

export type ProgressionState = {
    points: number;
    coins: number;
    level: number;
    tier: string;
    achievements: Achievement[];
    dailyStreak: number;
    redemptions: Redemption[];
};

const initialState: ProgressionState = {
    points: 0,
    coins: 0,
    level: 1,
    tier: "Bronze",
    achievements: [],
    dailyStreak: 0,
    redemptions: [],
};

const progressionSlice = createSlice({
    name: "progression",
    initialState,
    reducers: {
        setPoints(state, action: PayloadAction<number>) { state.points = action.payload; },
        setCoins(state, action: PayloadAction<number>) { state.coins = action.payload; },
        setLevel(state, action: PayloadAction<number>) { state.level = action.payload; },
        setTier(state, action: PayloadAction<string>) { state.tier = action.payload; },
        setDailyStreak(state, action: PayloadAction<number>) { state.dailyStreak = action.payload; },
        setProgression(state, action: PayloadAction<ProgressionState>) { return action.payload; },

        // --- ADD functions ---
        addPoints(state, action: PayloadAction<number>) { state.points += action.payload; },
        addCoins(state, action: PayloadAction<number>) { state.coins += action.payload; },
        levelUp(state) { state.level += 1; },
        addAchievement(state, action: PayloadAction<Achievement>) {
            if (!state.achievements.some(a => a.id === action.payload.id)) {
                state.achievements.push(action.payload);
            }
        },
        addRedemption(state, action: PayloadAction<Redemption>) {
            state.redemptions.push(action.payload);
        },
        incrementDailyStreak(state) { state.dailyStreak += 1; },

        // --- REMOVE functions ---
        spendPoints(state, action: PayloadAction<number>) {
            state.points = Math.max(0, state.points - action.payload);
        },
        spendCoins(state, action: PayloadAction<number>) {
            state.coins = Math.max(0, state.coins - action.payload);
        },
        removeAchievement(state, action: PayloadAction<string>) {
            state.achievements = state.achievements.filter(a => a.id !== action.payload);
        },
        clearRedemptions(state) {
            state.redemptions = [];
        },

        // --- UPDATE functions ---
        updateRedemptionStatus(state, action: PayloadAction<{ id: string; status: "pending" | "completed" | "failed"; }>) {
            const redemption = state.redemptions.find(r => r.id === action.payload.id);
            if (redemption) {
                redemption.status = action.payload.status;
            }
        },

        // --- RESET/CLEAR functions ---
        resetDailyStreak(state) { state.dailyStreak = 0; },
        resetProgress(state) { Object.assign(state, initialState); }
    }
});

export const progressionActions = progressionSlice.actions;
export default progressionSlice.reducer;
