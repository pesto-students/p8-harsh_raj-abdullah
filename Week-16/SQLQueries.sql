use  warehouse;

--@block
-- Find the item that has minimum weight.
select DESCRIPTION, WEIGHT
from items where WEIGHT = (select min(WEIGHT) from items);

--@block
-- Find the different warehouses in “Pune”.
select W.WNAME
from WAREHOUSES as W, CITIES as C
where W.CID = C.CID and C.city = 'Pune';

--@block
-- Find the details of items ordered by a customer “Mr. Patil”.
select I.DESCRIPTION 
from ITEMS as I, ITEMS_ORDERS as IO
where I.ITEMNO = IO.ITEMNO and IO.ONO in (
  select O.ONO 
  from ORDERS as O, CUSTOMER as C
  where O.CNO = C.CNO and C.CNAME = 'Mr. Patil'
);

--@block
-- Find a Warehouse which has maximum stores.
select W.WNAME
from WAREHOUSES as W, STORES as S
where W.WID = S.WID and S.SID in (
  select ST.SID from STORES_ITEMS as ST
  where ST.SID = S.SID and ST.quantity = (select max(quantity) from STORES_ITEMS) 
);

--@block
-- Find an item which is ordered for a minimum number of times.
select I.DESCRIPTION
from ITEMS as I, ITEMS_ORDERS as IO
where I.ITEMNO = IO.ITEMNO and IO.ITEMNO = (
  select ITEMNO from ITEMS_ORDERS
  GROUP BY ITEMNO
  ORDER BY count(ITEMNO) asc
  limit 1
);

--@block
-- Find the detailed orders given by each customer.
select C.CNO, C.CNAME, O.ONO, O.ODATE 
from CUSTOMER as C
left join ORDERS as O
ON C.CNO = O.CNO
;