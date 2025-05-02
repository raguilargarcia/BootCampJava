```sql

```

```sql
SELECT * FROM film WHERE length > 120;
```

```sql
SELECT * FROM customer WHERE last_name = "Smith";
```

```sql
SELECT * FROM film ORDER BY title ASC;
```

```sql
SELECT * FROM film ORDER BY length DESC;
```

```sql
SELECT count(*) as total_actors FROM actor;
```

```sql
SELECT avg(length) as avg_duration FROM film;
```

```sql
SELECT * FROM film WHERE rating = 'PG' OR rating = 'R';
```

```sql
SELECT * FROM customer WHERE last_name LIKE '%FORD';
```

```sql
SELECT 
    c.id_cliente,
    c.nombre,
    c.email,
    p.id_pedido,
    p.fecha_pedido,
    p.monto_total
FROM 
    clientes c
JOIN 
    (
        SELECT 
            id_cliente,
            MAX(fecha_pedido) AS ultima_fecha
        FROM 
            pedidos
        GROUP BY 
            id_cliente
    ) ultimos ON c.id_cliente = ultimos.id_cliente
JOIN 
    pedidos p ON p.id_cliente = ultimos.id_cliente AND p.fecha_pedido = ultimos.ultima_fecha
ORDER BY 
    c.nombre;
```