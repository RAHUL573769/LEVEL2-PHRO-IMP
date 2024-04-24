-- Active: 1710733353549@@127.0.0.1@5432@mydatabase
create DATABASE moduledatabse;

CREATE TABLE persons (
  id SERIAL PRIMARY KEY ,  
    name1 VARCHAR(50) NOT NULL,
    age INT,
    profession VARCHAR(100),
    isActive BOOLEAN,
    dob DATE,
    ratings NUMERIC(5,2)
);


INSERT INTO persons (id,name1,age,profession,isActive,dob,ratings)  VALUES ( 17,'Rahul Rudra',23,'Student',false,'2021-12-02',4.55),( 20,'Rafhul Rudra',23,'Student',false,'2021-12-02',4.55)

select * from persons ;
select name1 from persons ORDER BY id DESC ;

select DISTINCT name1 from persons; 
SELECT age as age1 from persons;


INSERT INTO persons (id,name1,age,profession,isActive,dob,ratings)  VALUES ( 27,'Rahul Rudra',23,'Student',false,'2021-12-02',4.55)

SELECT * from persons;

alter TABLE persons 
add COLUMN newcolum VARCHAR(59) 

SELECT * from persons ;


alter TABLE persons 
RENAME COLUMN newcolum TO newcolumn

SELECT * from persons;

alter table persons
     alter COLUMN newcolumn set NOT NULL;


alter table persons
add CONSTRAINT 

SELECT upper(name1) as capitalname from persons;

SELECT concat(name1,'  ',profession) as ConcatedName from persons;




