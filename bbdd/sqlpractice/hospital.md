primary key icon patient_id INT
first_name TEXT
last_name TEXT
gender CHAR(1)
birth_date DATE
city TEXT
primary key icon province_id CHAR(2)
allergies TEXT
height INT
weight

```sql
SELECT first_name, last_name, gender
FROM patients
WHERE gender = 'M';
```

```sql
SELECT first_name, last_name
FROM patients
WHERE allergies IS NULL;
```

```sql
SELECT first_name
FROM patients
WHERE first_name LIKE 'C%';
```

```sql
SELECT first_name, last_name
FROM patients
WHERE weight between 100 and 120;
```
```sql
SELECT DISTINCT YEAR(birth_date) AS birth_year
FROM patients
ORDER BY birth_year ASC;
```

```sql
SELECT first_name
FROM patients
GROUP BY first_name
HAVING COUNT(first_name) = 1;
```

```sql
SELECT patient_id, first_name
FROM patients
WHERE first_name LIKE 's%' AND first_name LIKE '%s' AND LENGTH(first_name) >= 6;
```