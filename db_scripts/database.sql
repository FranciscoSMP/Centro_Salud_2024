-- Inserción en la tabla Departamento
INSERT INTO Departamento (Nombre_Departamento) VALUES
('Guatemala'),
('Sacatepéquez'),
('Chimaltenango');

-- Inserción en la tabla Municipio
INSERT INTO Municipio (Nombre_Municipio, Id_Departamento) VALUES
('Mixco', 1),
('Antigua Guatemala', 2),
('Patzicía', 3);

-- Inserción en la tabla Pueblo
INSERT INTO Pueblo (Nombre_Pueblo) VALUES
('Kaqchikel'),
('Q’eqchi’'),
('Maya Mam');

-- Inserción en la tabla Discapacidad
INSERT INTO Discapacidad (Tipo_Discapacidad) VALUES
('Visual'),
('Auditiva'),
('Motriz');

-- Inserción en la tabla Profesion
INSERT INTO Profesion (Profesion_Oficio) VALUES
('Maestro'),
('Agricultor'),
('Enfermero');

-- Inserción en la tabla Comunidad_Linguistica
INSERT INTO Comunidad_Linguistica (Nombre_Comunidad_Linguistica) VALUES
('Kaqchikel'),
('Español'),
('Q’eqchi’');

-- Inserción en la tabla Escolaridad
INSERT INTO Escolaridad (Nivel_Escolaridad) VALUES
('Primaria'),
('Secundaria'),
('Universitaria');

-- Inserción en la tabla Paciente
INSERT INTO Paciente (
    DPI, Primer_nombre, Segundo_nombre, Tercer_nombre, Primer_apellido, Segundo_apellido,
    Fecha_nacimiento, Telefono, IGSS, Genero, Id_Escolaridad,
    Id_Comunidad_Linguistica, Id_Profesion, Id_Discapacidad, Id_Pueblo,
    Id_Municipio, Id_Departamento
) VALUES
('1234567890123', 'Juan', 'Carlos', NULL, 'García', 'Lopez', '1990-05-15', '12345678', 'S', 'M', 1, 2, 1, 1, 1, 1, 1),
('2345678901234', 'María', NULL, NULL, 'Pérez', 'Ramírez', '1985-09-22', '87654321', 'N', 'F', 2, 1, 2, 2, 2, 2, 2),
('3456789012345', 'Ana', 'Lucía', NULL, 'Mendoza', NULL, '2000-12-01', '11223344', 'S', 'F', 3, 3, 3, 3, 3, 3, 3);

-- Inserción en la tabla Tipo_Consulta
INSERT INTO Tipo_Consulta (Fecha_Consulta, Tipo_Consulta) VALUES
('2024-01-10', 'General'),
('2024-02-15', 'Especializada'),
('2024-03-20', 'Urgencias');

-- Inserción en la tabla Paciente_Consulta
INSERT INTO Paciente_Consulta (DPI_Paciente, Id_Consulta) VALUES
('1234567890123', 1),
('2345678901234', 2),
('3456789012345', 3);

-- Inserción en la tabla Enfermero
INSERT INTO Enfermero (
    DPI_Enfermero, Primer_Nombre, Segundo_Nombre, Tercer_Nombre,
    Primer_Apellido, Segundo_Apellido, Id_Municipio
) VALUES
('9876543210123', 'Carlos', NULL, NULL, 'Hernández', NULL, 1),
('8765432101234', 'Lucía', 'María', NULL, 'González', 'Martínez', 2),
('7654321012345', 'Pedro', NULL, 'Antonio', 'Sánchez', 'López', 3);