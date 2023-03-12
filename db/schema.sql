DROP DATABASE IF EXISTS login_cards;
CREATE DATABASE login_cards;

USE login_cards;

CREATE TABLE note_cards(
id INT NOT NUll,
first_name VARCHAR(30),
note_description VARCHAR(30),
note VARCHAR(30)
);