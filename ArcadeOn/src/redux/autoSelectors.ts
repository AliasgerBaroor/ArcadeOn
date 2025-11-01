// AUTO-GENERATED FILE - DO NOT EDIT! Run generateSelectors.ts to update
import { RootState } from "../stores/reduxStore";
import { ProgressionState } from "./slices/progressionSlice";
import { InventoryState } from "./slices/inventorySlice";
import { SocialState } from "./slices/socialSlice";
import { GameStatsState } from "./slices/gameStatsSlice";
import { PassState } from "./slices/passSlice";
import { Achievement } from "./slices/progressionSlice";
import { Redemption } from "./slices/progressionSlice";
import { InventoryItem } from "./slices/inventorySlice";
import { Friend } from "./slices/socialSlice";
import { GameStat } from "./slices/gameStatsSlice";
import { Pass } from "./slices/passSlice";
import { UserPass } from "./slices/passSlice";

export const selectors = {
  progression: {
    _: (state: RootState) => state.progression,
    points: (state: RootState) => state.progression.points,
    coins: (state: RootState) => state.progression.coins,
    level: (state: RootState) => state.progression.level,
    tier: (state: RootState) => state.progression.tier,
    achievements: (state: RootState) => state.progression.achievements,
    dailyStreak: (state: RootState) => state.progression.dailyStreak,
    redemptions: (state: RootState) => state.progression.redemptions,
  },
  inventory: {
    _: (state: RootState) => state.inventory,
    items: (state: RootState) => state.inventory.items,
  },
  social: {
    _: (state: RootState) => state.social,
    friends: (state: RootState) => state.social.friends,
    requests: (state: RootState) => state.social.requests,
    guilds: (state: RootState) => state.social.guilds,
  },
  gameStats: {
    _: (state: RootState) => state.gameStats,
    stats: (state: RootState) => state.gameStats.stats,
  },
  pass: {
    _: (state: RootState) => state.pass,
    pass: (state: RootState) => state.pass.pass,
    userPass: (state: RootState) => state.pass.userPass,
  },
} as const;

// Flattened selector map
export const selectorMap = {} as Record<SelectorKeys, (state: RootState) => any>;
type SelObj = typeof selectors;
export type SelectorKeys =
  { [S in keyof SelObj]: `${S & string}.${keyof SelObj[S] & string}` }[keyof SelObj];

(Object.keys(selectors) as Array<keyof SelObj>).forEach(slice => {
  const fields = selectors[slice];
  (Object.keys(fields) as Array<keyof typeof fields>).forEach(field => {
    const key = `${slice}.${field}` as SelectorKeys;
    selectorMap[key] = fields[field];
  });
});
export type SelectorResult<K extends SelectorKeys> =
  K extends "progression._" ? ProgressionState :
  K extends "progression.points" ? number :
  K extends "progression.coins" ? number :
  K extends "progression.level" ? number :
  K extends "progression.tier" ? string :
  K extends "progression.achievements" ? Achievement[] :
  K extends "progression.dailyStreak" ? number :
  K extends "progression.redemptions" ? Redemption[] :
  K extends "inventory._" ? InventoryState :
  K extends "inventory.items" ? InventoryItem[] :
  K extends "social._" ? SocialState :
  K extends "social.friends" ? Friend[] :
  K extends "social.requests" ? any :
  K extends "social.guilds" ? any :
  K extends "gameStats._" ? GameStatsState :
  K extends "gameStats.stats" ? GameStat[] :
  K extends "pass._" ? PassState :
  K extends "pass.pass" ? Pass | null :
  K extends "pass.userPass" ? UserPass | null :
  any;
