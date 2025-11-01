import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type PassReward = { level: number; reward: string; points: number };
export type Pass = {
    id: string;
    name: string;
    type: string;
    season: string;
    startDate: string;
    endDate: string;
    price?: number;
    isActive: boolean;
    rewards: PassReward[];
};

export type UserPass = {
    id: string;
    userId: string;
    passId: string;
    purchased: boolean;
    purchaseDate?: string;
    points: number;
    progress: number;
    status: string;
};

export type PassState = {
    pass: Pass | null;
    userPass: UserPass | null;
};

const initialState: PassState = {
    pass: null,
    userPass: null,
};

const passSlice = createSlice({
    name: "pass",
    initialState,
    reducers: {
        setPass(state, action: PayloadAction<Pass>) {
            state.pass = action.payload;
        },
        setUserPass(state, action: PayloadAction<UserPass>) {
            state.userPass = action.payload;
        },
        clearUserPass(state) {
            state.userPass = null;
        },
    },
});

export const passActions = passSlice.actions;
export default passSlice.reducer;
