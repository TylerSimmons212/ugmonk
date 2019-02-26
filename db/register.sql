insert into users (name, password)
values(${user},${pass})
returning name;