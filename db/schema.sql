-- Drops the blogger if it exists currently --
DROP DATABASE IF EXISTS music_db;
-- Creates the "blogger" database --
CREATE DATABASE music_db;

USE music_db;

 -- ARTISTS TABLE ----
CREATE TABLE artists (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    artists_name varchar(255) NOT NULL,
    devoured BOOL NOT NULL
);
