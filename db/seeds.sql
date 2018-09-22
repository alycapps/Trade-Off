-- User Dummy Data
INSERT INTO userBios (userName, location, bio) VALUES ("Audrey", "Durham, NC", "Developer interested in all things electronic");
INSERT INTO userBios (userName, location, bio) VALUES ("Bill", "Cary, NC", "Contractor who loves to build");
INSERT INTO userBios (userName, location, bio) VALUES ("Johnny", "Durham, NC", "Collector of junk");
INSERT INTO userBios (userName, location, bio) VALUES ("Keli", "Chapel Hill, NC", "Developer interested in all things electronic");


-- Product Dummy Data

--Need to associate this product to Audrey's ID
INSERT INTO products (item, description, price, negotiable, barter) VALUES ("Table", "brown coffee table", "100", "0", "0");

--Need to associate this product to Bill's ID
INSERT INTO products (item, description, price, negotiable, barter) VALUES ("Table", "brown coffee table", "100", "0", "0");

--Need to associate this product to Johnny's ID
INSERT INTO products (item, description, price, negotiable, barter) VALUES ("Table", "brown coffee table", "100", "0", "0");

--Need to associate this product to Keli's ID
INSERT INTO products (item, description, price, negotiable, barter) VALUES ("Table", "brown coffee table", "100", "0", "0");