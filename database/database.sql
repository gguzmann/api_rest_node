drop database if exists empleados;

create database empleados;

use empleados;

create TABLE `employee` (
    id int(11) NOT NULL AUTO_INCREMENT,
    firstname varchar(100),
    lastname varchar(100),
    email varchar(100),
    phone varchar(20),
    birthdate date default NULL,
    supervisedby_id int(11) default NULL,
    FOREIGN KEY (supervisedby_id) REFERENCES employee(id),
    PRIMARY KEY (id)
)
