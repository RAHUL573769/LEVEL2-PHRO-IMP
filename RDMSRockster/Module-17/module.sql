-- Active: 1710733353549@@127.0.0.1@5432@mydatabase
create database test;

alter DATABASE test RENAME to test2;


CREATE TABLE person(
    person_id SERIAL,
    first_name varchar(100),
    last_name varchar(100),
    age INT,
    is_active BOOLEAN
)

alter TABLE person RENAME to person2;
DROP TABLE person2;



CREATE TABLE person(
    person_id SERIAL PRIMARY KEY,
    first_name varchar(100) UNIQUE,
    last_name varchar(100),
    age INT CHECK(age>30),
    is_active BOOLEAN
)

INSERT INTO person VALUES(1,'Rahul Rudra','Rudra',40,false)

select * from person;

ALTER TABLE person
ADD COLUMN email VARCHAR(30) DEFAULT 'RAHUL' NOT NULL


select * from person;

ALTER TABLE person
RENAME to person2;

alter table person2
RENAME COLUMN email to email2;


select * from person2;


alter Table person2 
alter COLUMN email2 set not null;



select * from person2;
