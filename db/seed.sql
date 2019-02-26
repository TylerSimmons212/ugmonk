create table users (
    user_id serial primary key,
    name varchar,
    email varchar,
    password varchar,
    address text,
    admin boolean 
);
create table product (
    product_id serial PRIMARY key,
    product_name varchar,
    image_url text,
    price int,
    category varchar,
    type varchar,
    amount int
);
create table cart (
    cart_id serial primary key,
    user_id int REFERENCES users (user_id),
    product_id int REFERENCES product (product_id),
    quantity int
);
create table orders (
    order_id serial PRIMARY key,
    user_id int REFERENCES users (user_id)
);

create table order_item (
    order_item_id serial PRIMARY key,
    order_id int REFERENCES orders (order_id),
    product_id int REFERENCES product (product_id),
    quantity INT
);
create table posts (
    post_id serial PRIMARY key,
    date varchar,
    post_name varchar,
    image_url text,
    text text
);i