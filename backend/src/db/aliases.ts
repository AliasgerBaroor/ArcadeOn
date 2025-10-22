import { prisma } from "../config/seeds.js";

export const userDB = prisma.user as typeof prisma.user & { seeds?: () => Promise<void> };
export const deviceDB = prisma.device as typeof prisma.device & { seeds?: () => Promise<void> };
export const gameDB = prisma.game as typeof prisma.game & { seeds?: () => Promise<void> };
export const userGameDB = prisma.userGame as typeof prisma.userGame & { seeds?: () => Promise<void> };
export const achievementDB = prisma.achievement as typeof prisma.achievement & { seeds?: () => Promise<void> };
export const userAchievementDB = prisma.userAchievement as typeof prisma.userAchievement & { seeds?: () => Promise<void> };
export const transactionDB = prisma.transaction as typeof prisma.transaction & { seeds?: () => Promise<void> };
export const leaderboardDB = prisma.leaderboard as typeof prisma.leaderboard & { seeds?: () => Promise<void> };
export const friendDB = prisma.friend as typeof prisma.friend & { seeds?: () => Promise<void> };
export const notificationDB = prisma.notification as typeof prisma.notification & { seeds?: () => Promise<void> };
export const pointsTransactionDB = prisma.pointsTransaction as typeof prisma.pointsTransaction & { seeds?: () => Promise<void> };
export const redemptionDB = prisma.redemption as typeof prisma.redemption & { seeds?: () => Promise<void> };
export const tierDB = prisma.tier as typeof prisma.tier & { seeds?: () => Promise<void> };
export const rewardDB = prisma.reward as typeof prisma.reward & { seeds?: () => Promise<void> };
export const passDB = prisma.pass as typeof prisma.pass & { seeds?: () => Promise<void> };
export const userPassDB = prisma.userPass as typeof prisma.userPass & { seeds?: () => Promise<void> };
