-- Active: 1710733353549@@127.0.0.1@5432@postgres_session@public
CREATE TABLE persons (
  id SERIAL ,  
    name VARCHAR(50),
    age INT,
    profession VARCHAR(100),
    isActive BOOLEAN,
    dob DATE,
    ratings NUMERIC(5,2)
);
select * from persons;

drop table persons;

select * from persons;


CREATE TABLE persons (
  id SERIAL PRIMARY KEY ,  
    name1 VARCHAR(50) NOT NULL,
    age INT,
    profession VARCHAR(100),
    isActive BOOLEAN,
    dob DATE,
    ratings NUMERIC(5,2)
);

INSERT INTO persons (id,name1,age,profession,isActive,dob,ratings)  VALUES ( 2,'Rahul Rudra',23,'Student',false,'2021-12-02',4.55)

ALTER Table persons 
RENAME to  person3;


select * from person3;
ALTER Table person3 
RENAME COLUMN dob to dateofbirth

ALTER Table person3 
ADD COLUMN email VARCHAR(50);

select * from person3;

alter table person3 ADD COLUMN description1 VARCHAR(20);

select * from person3;


INSERT INTO person3 (id,name1,age,profession,isActive,dateofbirth,ratings,email,description1)  VALUES ( 3,'Rahul Rudra',23,'Student',false,'2021-12-02',4.55,'rahul@gmail.com','This is Good')

select * from person3;

alter table person3 add CONSTRAINT CHECK_person3_profession UNIQUE(profession)