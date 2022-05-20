DROP DATABASE IF EXISTS homemade;

CREATE DATABASE homemade;

USE homemade;

CREATE TABLE `Users` (
  `id` INT PRIMARY KEY NOT NULL,
  `email` VARCHAR(50) UNIQUE NOT NULL,
  `phone` VARCHAR(11),
  `password` VARCHAR(20) NOT NULL,
  `firstname` VARCHAR(25),
  `lastname` VARCHAR(25),
  `age` INT NOT NULL,
  `gender` VARCHAR(20),
  `lessee` BIT,
  `lessor` BIT,
  `location` VARCHAR(100),
  `imageURL` VARCHAR(255)
);

CREATE TABLE `Listings` (
  `user_id` INT PRIMARY KEY NOT NULL,
  `description` VARCHAR(510),
  `imageURL` VARCHAR(50),
  `longitude` FLOAT,
  `latitude` FLOAT,
  `address` VARCHAR(255),
  `price` FLOAT
);

CREATE TABLE `Messages` (
  `id` INT PRIMARY KEY NOT NULL,
  `message` VARCHAR(255),
  `time_sent` DATETIME NOT NULL DEFAULT (CURRENT_TIMESTAMP),
  `recipient_id` INT NOT NULL
);

CREATE TABLE `Matches` (
  `id` INT PRIMARY KEY NOT NULL,
  `match_request_from` VARCHAR(255) NOT NULL,
  `match_request_to` VARCHAR(255) NOT NULL,
  `match_request_sender` VARCHAR(255) NOT NULL,
  `match_request_receiver` VARCHAR(255) NOT NULL,
  `match_request_status` INT NOT NULL,
  `created_date` DATETIME DEFAULT (CURRENT_TIMESTAMP),
  `accepted_date` DATETIME
);

CREATE TABLE `Users_Matches` (
  `user_id` INT NOT NULL,
  `matches_id` INT NOT NULL,
  PRIMARY KEY (`user_id`, `matches_id`)
);

CREATE TABLE `Users_Messages` (
  `user_id` INT NOT NULL,
  `message_id` INT NOT NULL,
  PRIMARY KEY (`user_id`, `message_id`)
);

ALTER TABLE `Users_Matches` ADD FOREIGN KEY (`user_id`) REFERENCES `Users` (`id`) ON DELETE CASCADE;

ALTER TABLE `Users_Matches` ADD FOREIGN KEY (`matches_id`) REFERENCES `Matches` (`id`) ON DELETE CASCADE;

ALTER TABLE `Users_Messages` ADD FOREIGN KEY (`user_id`) REFERENCES `Users` (`id`) ON DELETE CASCADE;

ALTER TABLE `Users_Messages` ADD FOREIGN KEY (`message_id`) REFERENCES `Messages` (`id`) ON DELETE CASCADE;

ALTER TABLE `Listings` ADD FOREIGN KEY (`user_id`) REFERENCES `Users` (`id`) ON DELETE CASCADE;


/*  Execute this file from the command line by typing:
    mysql -u root < server/schema.sql
    to create the database and the tables. */
