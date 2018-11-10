DROP DATABASE IF EXISTS petFinder_db;
CREATE DATABASE petFinder_db;

<<<<<<< HEAD
DROP DATABASE IF EXISTS testdb;
CREATE DATABASE testdb;

create database petfinderdb;
create table Petlist (
pet_id int not null auto_increment,
pet_name varchar(255) null,
pet_type varchar(255) not null,
pet_description text not null,

primary key (pet_id);
 
 


);
=======
USE petFinder_db;

DROP TABLE IF EXISTS petfinder_data;

CREATE TABLE petfinder_data (
  id INT(11) AUTO_INCREMENT PRIMARY KEY,
  latitude FLOAT(10,6) NOT NULL,
  longitude FLOAT(10,6) NOT NULL,
  animalSpecies VARCHAR(255),
  animalGenderMale VARCHAR(255),
  animalPic VARCHAR(255),
  animalFeatures VARCHAR(255),
  foundStreet1 VARCHAR(255),
  foundStreet2 VARCHAR(255),
  personName VARCHAR(255),
  personEmail VARCHAR(255),
  foundDate VARCHAR(255)
  
);
>>>>>>> 697a2a3041e5561fc65b709bd089b14fc1d9dff2
