create table users (
    id int AUTO_INCREMENT, 
    name varchar(60), 
    email varchar(100), 
    status bit, 
    createdAt datetime, 
    updatedAt datetime,
    PRIMARY KEY (id)
);