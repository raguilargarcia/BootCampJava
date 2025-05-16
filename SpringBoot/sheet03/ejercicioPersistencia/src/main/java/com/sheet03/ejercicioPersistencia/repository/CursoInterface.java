package com.sheet03.ejercicioPersistencia.repository;

import com.sheet03.ejercicioPersistencia.model.Curso;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface CursoInterface extends JpaRepository<Curso, Long> {
    @Query("SELECT c FROM Curso c WHERE name LIKE %:name%")
    Optional<Curso> findByName(@Param("name") String name);

    Optional<Curso> findByInstructor_Name(String name);
}
