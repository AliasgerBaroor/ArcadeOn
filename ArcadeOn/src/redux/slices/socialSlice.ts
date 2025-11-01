import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Friend = { id: string; displayName: string; online: boolean; };
export type SocialState = { friends: Friend[]; requests: Friend[]; guilds: string[]; };

const initialState: SocialState = { friends: [], requests: [], guilds: [] };

const socialSlice = createSlice({
    name: "social",
    initialState: initialState,
    reducers: {
        addFriend(state, action: PayloadAction<Friend>) {
            if (!state.friends.some(f => f.id === action.payload.id)) { state.friends.push(action.payload); }
        },
        removeFriend(state, action: PayloadAction<string>) {
            state.friends = state.friends.filter(f => f.id !== action.payload);
        },
        setFriendOnlineStatus(state, action: PayloadAction<{ id: string, online: boolean }>) {
            const friend = state.friends.find(f => f.id === action.payload.id);
            if (friend) { friend.online = action.payload.online; }
        },
        addRequest(state, action: PayloadAction<Friend>) {
            if (!state.requests.some(r => r.id === action.payload.id)) { state.requests.push(action.payload); }
        },
        removeRequest(state, action: PayloadAction<string>) {
            state.requests = state.requests.filter(r => r.id !== action.payload);
        },
        addGuild(state, action: PayloadAction<string>) {
            if (!state.guilds.includes(action.payload)) { state.guilds.push(action.payload); }
        },
        removeGuild(state, action: PayloadAction<string>) {
            state.guilds = state.guilds.filter(g => g !== action.payload);
        },
        clearSocial(state) { Object.assign(state, initialState); }
    }
});

export const socialActions = socialSlice.actions;
export default socialSlice.reducer;
