-- DropForeignKey
ALTER TABLE `players` DROP FOREIGN KEY `players_game_id_fkey`;

-- AddForeignKey
ALTER TABLE `players` ADD CONSTRAINT `players_game_id_fkey` FOREIGN KEY (`game_id`) REFERENCES `games`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
