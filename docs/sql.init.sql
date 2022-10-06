CREATE TABLE
  `blogs` (
    `id` int NOT NULL AUTO_INCREMENT,
    `title` varchar(64) NOT NULL,
    `category` varchar(64) NOT NULL,
    `body` varchar(128) NOT NULL,
    `active` active BOOL NOT NULL DEFAULT TRUE,
    `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updated_at` datetime DEFAULT NULL,
    `deleted_at` datetime DEFAULT NULL,
    PRIMARY KEY (`id`)
  )