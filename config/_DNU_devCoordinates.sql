DROP DATABASE IF EXISTS petFinder_db;
CREATE DATABASE petFinder_db;

USE petFinder_db;

DROP TABLE IF EXISTS petFinder_data;

CREATE TABLE petfinder_data (
  id INT(11) AUTO_INCREMENT PRIMARY KEY,
  latitude FLOAT(10,6) NOT NULL,
  longitude FLOAT(10,6) NOT NULL,
  animalGenderMale BOOLEAN DEFAULT true,
  animalPic VARCHAR(255),
  animalFeatures VARCHAR(255),
  foundStreet1 VARCHAR(255),
  foundStreet2 VARCHAR(255),
  personName VARCHAR(255),
  personEmail VARCHAR(255),
  foundDate VARCHAR(255)
  
);

SELECT * FROM petFinder_data;

INSERT INTO petFinder_data (id, latitude, longitude, animalGenderMale, animalPic, animalFeatures, foundStreet1, foundStreet2, personName, personEmail, foundDate)
VALUES 
            (
            NULL,
            32.933066,
            -110.933066,
            NULL,
            "http://www.google.com/image.jpg",
            "Wet black nose",
            "123 Anyuwhere street",
            "Second line of address",
            "Justin Colville",
            "justin@me.com",
            "dec 22 2018"
            );