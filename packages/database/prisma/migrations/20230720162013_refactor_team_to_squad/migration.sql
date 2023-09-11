/*
  Warnings:

  - You are about to drop the column `team_id` on the `users` table. All the data in the column will be lost.
  - You are about to drop the `team_invites` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `teams` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `team_invites` DROP FOREIGN KEY `team_invites_invitee_id_fkey`;

-- DropForeignKey
ALTER TABLE `team_invites` DROP FOREIGN KEY `team_invites_team_id_fkey`;

-- DropForeignKey
ALTER TABLE `teams` DROP FOREIGN KEY `teams_owner_id_fkey`;

-- DropForeignKey
ALTER TABLE `users` DROP FOREIGN KEY `users_team_id_fkey`;

-- AlterTable
ALTER TABLE `users` DROP COLUMN `team_id`,
    ADD COLUMN `squad_id` INTEGER NULL;

-- DropTable
DROP TABLE `team_invites`;

-- DropTable
DROP TABLE `teams`;

-- CreateTable
CREATE TABLE `squads` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `squad_logo` VARCHAR(191) NULL,
    `slogan` VARCHAR(191) NULL,
    `bio` VARCHAR(191) NULL,
    `owner_id` INTEGER NOT NULL,
    `created` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `squads_name_key`(`name`),
    INDEX `squads_name_idx`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `squad_invites` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `invitee_id` INTEGER NOT NULL,
    `squad_id` INTEGER NOT NULL,
    `accepted` DATETIME(3) NULL,
    `declined` DATETIME(3) NULL,
    `created` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `squad_invites_squad_id_idx`(`squad_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `users` ADD CONSTRAINT `users_squad_id_fkey` FOREIGN KEY (`squad_id`) REFERENCES `squads`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `squads` ADD CONSTRAINT `squads_owner_id_fkey` FOREIGN KEY (`owner_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `squad_invites` ADD CONSTRAINT `squad_invites_invitee_id_fkey` FOREIGN KEY (`invitee_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `squad_invites` ADD CONSTRAINT `squad_invites_squad_id_fkey` FOREIGN KEY (`squad_id`) REFERENCES `squads`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
