/*
  Warnings:

  - Changed the type of `action` on the `PointsTransaction` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "PointsTransactionAction" AS ENUM ('EARN', 'REDEEM', 'ADJUST', 'PURCHASE', 'BONUS', 'EVENT', 'ACHIEVEMENT', 'LEVEL_UP', 'MATCH_WIN', 'MATCH_LOSS', 'MATCH_DRAW', 'REFER', 'DAILY_LOGIN', 'QUEST_COMPLETE', 'PENALTY', 'REFUND', 'CONSUME_ITEM');

-- AlterTable
ALTER TABLE "PointsTransaction" DROP COLUMN "action",
ADD COLUMN     "action" "PointsTransactionAction" NOT NULL;
