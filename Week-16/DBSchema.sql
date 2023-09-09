create database warehouse;
--@Blocking
-- DROP database warehouse;
USE warehouse;

--@Block
CREATE TABLE CITIES (
    CID integer primary key auto_increment not null,
    city varchar(20),
    states varchar(20)
);
CREATE TABLE WAREHOUSES(
  WID integer primary key auto_increment not null,
  WNAME varchar(30),
  LOCATION varchar(20),
  CID integer,
  foreign key (CID) references CITIES(CID)
);
CREATE TABLE STORES(
  SID integer primary key auto_increment not null,
  STORE_NAME varchar(20), 
  LOCATION_CITY varchar(20),
  WID integer,
  foreign key (WID) references WAREHOUSES(WID)
);
CREATE TABLE CUSTOMER(
  CNO integer primary key auto_increment not null, 
  CNAME varchar(50),
  ADDR VARCHAR(50),
  CU_CITY varchar(20)
);
CREATE TABLE ORDERS(
  ONO integer primary key auto_increment not null,
  ODATE date,
  CNO integer,
  foreign key (CNO) references CUSTOMER(CNO)
);
CREATE TABLE ITEMS(
  ITEMNO integer primary key auto_increment not null,
  DESCRIPTION text,
  WEIGHT decimal(5,2), 
  COST decimal(5,2) 
);
CREATE TABLE ITEMS_ORDERS(
  ID integer primary key auto_increment not null,
  ordered_quantity integer,
  ITEMNO integer,
  foreign key (ITEMNO) references ITEMS(ITEMNO),
  ONO integer,
  foreign key (ONO) references ORDERS(ONO)
);
CREATE TABLE STORES_ITEMS(
  ID integer primary key auto_increment not null,
  quantity integer,
  SID integer,
  foreign key (SID) references STORES(SID),
  ITEMNO integer,
  foreign key (ITEMNO) references ITEMS(ITEMNO)
);

--@blocking
commit;

-- Storing data into tables
--@blocking
INSERT INTO CITIES VALUES(1,'kolkata', 'WB');
INSERT INTO CITIES VALUES(2,'Delhi', 'Delhi');
INSERT INTO CITIES VALUES(3,'Pune', 'Maharashtra');

--@blocking
INSERT INTO WAREHOUSES VALUES(1,'house1', 'Pune', 3);
INSERT INTO WAREHOUSES VALUES(2,'house2', 'Delhi', 2);
INSERT INTO WAREHOUSES VALUES(3,'house3', 'Pune', 3);

--@blocking
INSERT INTO STORES VALUES(1,'store1', 'Pune', 1);
INSERT INTO STORES VALUES(2,'store2', 'Delhi', 2);
INSERT INTO STORES VALUES(3,'store3', 'Pune', 1);
INSERT INTO STORES VALUES(4,'store4', 'Pune', 3);
INSERT INTO STORES VALUES(5,'store5', 'Pune', 3);

--@blocking
INSERT INTO CUSTOMER VALUES(1,'John', 'Address1', 'Pune');
INSERT INTO CUSTOMER VALUES(2,'Mr. Patil', 'Address2', 'Delhi');
INSERT INTO CUSTOMER VALUES(3,'Sam', 'Address3', 'Pune');
INSERT INTO CUSTOMER VALUES(4,'Raju', 'Address4', 'Pune');
INSERT INTO CUSTOMER VALUES(5,'Karim', 'Address5', 'Kolkata');
INSERT INTO CUSTOMER VALUES(6,'Sentu', 'Address6', 'Berhm');

--@blocking
INSERT INTO ORDERS VALUES(1,'02/04/23', 1);
INSERT INTO ORDERS VALUES(2,'03/04/23', 2);
INSERT INTO ORDERS VALUES(3,'12/04/23', 1);
INSERT INTO ORDERS VALUES(4,'21/04/23', 3);
INSERT INTO ORDERS VALUES(5,'21/04/23', 2);
INSERT INTO ORDERS VALUES(6,'21/04/23', 2);

--@blocking
INSERT INTO ITEMS VALUES(1,'product1', 10.23, 500);
INSERT INTO ITEMS VALUES(2,'product2', 5.02, 400);
INSERT INTO ITEMS VALUES(3,'product3', 6, 600);
INSERT INTO ITEMS VALUES(4,'product4', 4.20, 350);
INSERT INTO ITEMS VALUES(5,'product5', 6.23, 550);
INSERT INTO ITEMS VALUES(6,'product6', 12, 300);

--@blocking
INSERT INTO ITEMS_ORDERS VALUES(1, 5, 2, 1);
INSERT INTO ITEMS_ORDERS VALUES(6, 5, 2, 5);
INSERT INTO ITEMS_ORDERS VALUES(4, 1, 3, 2);
INSERT INTO ITEMS_ORDERS VALUES(5, 10, 4, 3);
INSERT INTO ITEMS_ORDERS VALUES(8, 5, 4, 3);
INSERT INTO ITEMS_ORDERS VALUES(2, 3, 6, 1);
INSERT INTO ITEMS_ORDERS VALUES(3, 2, 6, 3);
INSERT INTO ITEMS_ORDERS VALUES(7, 15, 6, 6);



--@blocking
INSERT INTO STORES_ITEMS VALUES(1, 60, 2, 1);
INSERT INTO STORES_ITEMS VALUES(2, 10, 2, 2);
INSERT INTO STORES_ITEMS VALUES(3, 20, 1, 4);
INSERT INTO STORES_ITEMS VALUES(4, 50, 1, 2);
INSERT INTO STORES_ITEMS VALUES(5, 40, 3, 3);
INSERT INTO STORES_ITEMS VALUES(6, 50, 4, 2);
INSERT INTO STORES_ITEMS VALUES(7, 15, 5, 5);
INSERT INTO STORES_ITEMS VALUES(8, 45, 2, 3);


--@block
commit;



