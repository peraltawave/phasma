DROP DATABASE IF EXISTS exampledb;
CREATE DATABASE exampledb;

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
