
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type InventoryItem = {
    id: string;
    name: string;
    type: "powerup" | "cosmetic" | "skin" | "global";
    quantity: number;
    global: boolean;
};

export type InventoryState = { items: InventoryItem[] };

const initialState: InventoryState = { items: [] };

const inventorySlice = createSlice({
    name: "inventory",
    initialState: initialState,
    reducers: {
        addItem(state, action: PayloadAction<InventoryItem>) {
            const existing = state.items.find(i => i.id === action.payload.id);
            if (existing) { existing.quantity += action.payload.quantity; }
            else { state.items.push(action.payload); }
        },
        consumeItem(state, action: PayloadAction<string>) {
            const item = state.items.find(i => i.id === action.payload);
            if (item && item.quantity > 0) { item.quantity -= 1; }
        },
        removeItem(state, action: PayloadAction<string>) {
            state.items = state.items.filter(i => i.id !== action.payload);
        },
        clearInventory(state) { state.items = []; },
        setItemQuantity(state, action: PayloadAction<{ id: string, quantity: number }>) {
            const item = state.items.find(i => i.id === action.payload.id);
            if (item) { item.quantity = action.payload.quantity; }
        },
        setInventory(state, action: PayloadAction<InventoryItem[]>) {
            state.items = action.payload;
        }
    }
});

export const inventoryActions = inventorySlice.actions;
export default inventorySlice.reducer;
