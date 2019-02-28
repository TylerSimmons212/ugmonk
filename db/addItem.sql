insert into product (image_url, product_name, price, category, type, amount)
values (${url}, ${name}, ${price}, ${cat}, ${type}, ${amount})
returning product_name, image_url, price, category, type, amount;
