update product
set product_name = ${name}, image_url = ${url}, price = ${price}, category = ${cat}, type = ${type}, amount = ${amount}
where product_id = ${id}
returning product_name, image_url, price, category, type, amount;