-- CreateTable
CREATE TABLE `Board` (
    `id` VARCHAR(191) NOT NULL,
    `orgId` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `imageId` VARCHAR(191) NOT NULL,
    `imageThumbUrl` VARCHAR(191) NOT NULL,
    `imageFullUrl` VARCHAR(191) NOT NULL,
    `imageUserName` VARCHAR(191) NOT NULL,
    `imageLinkHTML` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
