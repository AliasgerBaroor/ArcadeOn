import { configureStore } from '@reduxjs/toolkit';
import progressionReducer from "@/src/redux/slices/progressionSlice"
import inventoryReducer from "@/src/redux/slices/inventorySlice"
import socialReducer from "@/src/redux/slices/socialSlice"
import gameStatsReducer from "@/src/redux/slices/gameStatsSlice"
import passReducer from "@/src/redux/slices/passSlice"
export const store = configureStore({
  reducer: {
    progression: progressionReducer,
    inventory: inventoryReducer,
    social: socialReducer,
    gameStats: gameStatsReducer,
    pass: passReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;