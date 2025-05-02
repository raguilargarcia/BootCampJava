<!--CREACIÓN TABLAS-->

```sql
CREATE TABLE Socio (
    id_socio INT PRIMARY KEY,
    nombre_completo VARCHAR(100),
    fecha_nacimiento DATE,
    telefono VARCHAR(20),
    direccion TEXT,
    fecha_inscripcion DATE
);
```

```sql
CREATE TABLE Entrenador (
    id_entrenador INT PRIMARY KEY,
    nombre_completo VARCHAR(100),
    experiencia_anios INT
);
```

```sql
CREATE TABLE Disciplina (
    id_disciplina INT PRIMARY KEY,
    nombre VARCHAR(50)
);
```

```sql
CREATE TABLE Horario (
    id_horario INT PRIMARY KEY,
    id_entrenador INT,
    dia VARCHAR(20),
    hora_inicio TIME,
    hora_fin TIME,
    FOREIGN KEY (id_entrenador) REFERENCES Entrenador(id_entrenador)
);
```

```sql
CREATE TABLE SocioDisciplina (
    id_socio INT,
    id_disciplina INT,
    PRIMARY KEY (id_socio, id_disciplina),
    FOREIGN KEY (id_socio) REFERENCES Socio(id_socio),
    FOREIGN KEY (id_disciplina) REFERENCES Disciplina(id_disciplina)
);
```

```sql
CREATE TABLE EntrenadorDisciplina (
    id_entrenador INT,
    id_disciplina INT,
    PRIMARY KEY (id_entrenador, id_disciplina),
    FOREIGN KEY (id_entrenador) REFERENCES Entrenador(id_entrenador),
    FOREIGN KEY (id_disciplina) REFERENCES Disciplina(id_disciplina)
);
```

```sql
CREATE TABLE Evento (
    id_evento INT PRIMARY KEY,
    nombre VARCHAR(100),
    descripcion TEXT,
    id_disciplina INT,
    fecha DATE,
    hora TIME,
    lugar VARCHAR(100),
    id_ganador INT NULL,
    FOREIGN KEY (id_disciplina) REFERENCES Disciplina(id_disciplina),
    FOREIGN KEY (id_ganador) REFERENCES Socio(id_socio)
);
```

```sql
CREATE TABLE SocioEvento (
    id_socio INT,
    id_evento INT,
    PRIMARY KEY (id_socio, id_evento),
    FOREIGN KEY (id_socio) REFERENCES Socio(id_socio),
    FOREIGN KEY (id_evento) REFERENCES Evento(id_evento)
);
```

```sql
CREATE TABLE EventoEntrenador (
    id_evento INT,
    id_entrenador INT,
    PRIMARY KEY (id_evento, id_entrenador),
    FOREIGN KEY (id_evento) REFERENCES Evento(id_evento),
    FOREIGN KEY (id_entrenador) REFERENCES Entrenador(id_entrenador)
);
```

```sql
CREATE TABLE Cuota (
    id_pago INT PRIMARY KEY,
    id_socio INT,
    fecha_pago DATE,
    monto DECIMAL(10,2),
    estado_pago VARCHAR(20),
    FOREIGN KEY (id_socio) REFERENCES Socio(id_socio)
);
```

<!--INSERTS-->

```sql
-- Disciplinas
INSERT INTO Disciplina VALUES (1, 'Fútbol'), (2, 'Natación'), (3, 'Tenis');

-- Socios
INSERT INTO Socio VALUES
(1, 'Carlos Pérez', '1990-04-10', '123456789', 'Calle A 123', '2023-01-15'),
(2, 'Ana López', '1985-07-23', '987654321', 'Calle B 456', '2022-11-03'),
(3, 'Luis Gómez', '2000-02-12', '456789123', 'Calle C 789', '2021-06-30'),
(4, 'Laura Díaz', '1998-09-05', '321654987', 'Calle D 234', '2024-03-10'),
(5, 'Mario Torres', '1975-12-25', '654987321', 'Calle E 567', '2020-08-19');

-- Entrenadores
INSERT INTO Entrenador VALUES
(1, 'Jorge Ruiz', 10),
(2, 'Claudia Ríos', 5),
(3, 'Fernando Méndez', 8);

-- Horarios
INSERT INTO Horario VALUES
(1, 1, 'Lunes', '10:00', '12:00'),
(2, 2, 'Miércoles', '14:00', '16:00'),
(3, 3, 'Viernes', '09:00', '11:00');

-- Asignar disciplinas a entrenadores
INSERT INTO EntrenadorDisciplina VALUES
(1, 1), (1, 3),
(2, 2),
(3, 1), (3, 2);

-- Socios en disciplinas
INSERT INTO SocioDisciplina VALUES
(1, 1), (2, 2), (3, 1), (3, 3), (4, 2), (5, 1);

-- Eventos
INSERT INTO Evento VALUES
(1, 'Torneo Verano', 'Torneo amistoso de fútbol', 1, '2025-07-15', '10:00', 'Cancha Central', NULL),
(2, 'Copa Acuática', 'Competencia de natación', 2, '2025-08-20', '14:00', 'Piscina Principal', NULL);

-- Asignar entrenadores a eventos
INSERT INTO EventoEntrenador VALUES
(1, 1), (1, 3),
(2, 2), (2, 3);

-- Participantes en eventos
INSERT INTO SocioEvento VALUES
(1, 1), (3, 1),
(2, 2), (4, 2);

-- Ganador del evento 1
UPDATE Evento SET id_ganador = 3 WHERE id_evento = 1;

-- Pagos
INSERT INTO Cuota VALUES
(1, 1, '2025-04-01', 50.00, 'pagado'),
(2, 2, '2025-03-15', 50.00, 'vencido'),
(3, 3, '2025-04-10', 50.00, 'pagado'),
(4, 4, NULL, 50.00, 'pendiente'),
(5, 5, '2025-02-28', 50.00, 'vencido');
```

<!--CONSULTAS-->

```sql
SELECT s.nombre_completo
FROM Socio s
JOIN SocioDisciplina sd ON s.id_socio = sd.id_socio
JOIN Disciplina d ON d.id_disciplina = sd.id_disciplina
WHERE d.nombre = 'Fútbol';

SELECT e.nombre AS evento, e.fecha, s.nombre_completo AS participante
FROM Evento e
JOIN SocioEvento se ON e.id_evento = se.id_evento
JOIN Socio s ON se.id_socio = s.id_socio
WHERE e.fecha > CURRENT_DATE;

SELECT s.nombre_completo, c.fecha_pago, c.estado_pago
FROM Cuota c
JOIN Socio s ON c.id_socio = s.id_socio
WHERE c.estado_pago IN ('pendiente', 'vencido');

SELECT d.nombre AS disciplina, e.nombre_completo AS entrenador
FROM Entrenador e
JOIN EntrenadorDisciplina ed ON e.id_entrenador = ed.id_entrenador
JOIN Disciplina d ON ed.id_disciplina = d.id_disciplina;

SELECT s.nombre_completo AS ganador
FROM Evento e
JOIN Socio s ON e.id_ganador = s.id_socio
WHERE e.nombre = 'Torneo Verano';
```

<!--ÍNDICES-->

```sql
CREATE INDEX idx_socio_disciplina ON SocioDisciplina(id_disciplina);
CREATE INDEX idx_estado_pago ON Cuota(estado_pago);
```
