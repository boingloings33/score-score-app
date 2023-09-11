/*
  Warnings:

  - Added the required column `icon` to the `playable_games` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `playable_games` ADD COLUMN `icon` ENUM('PLUS', 'MINUS', 'EQUAL', 'CIRCLE', 'CROWN', 'BAT', 'BASKETBALL', 'EIGHT_BALL', 'BOWLING_BALL', 'BEAN_BAG', 'CUP', 'GOLF_BALL', 'HOCKEY_PUCK', 'PADDLE', 'SOCCER_BALL') NOT NULL;
