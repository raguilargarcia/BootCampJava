package com.sheet03.ejercicioPersistencia.repository;

import com.sheet03.ejercicioPersistencia.model.Estudiante;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface EstudianteInterface extends JpaRepository<Estudiante, Long> {
    Optional<Estudiante> findByAddress_City(String city);

    Optional<Estudiante> findByCourses_Name(String name);
}
