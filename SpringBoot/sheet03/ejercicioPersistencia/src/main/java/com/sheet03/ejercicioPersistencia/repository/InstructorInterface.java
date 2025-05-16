package com.sheet03.ejercicioPersistencia.repository;

import com.sheet03.ejercicioPersistencia.model.Instructor;
import org.springframework.data.jpa.repository.JpaRepository;

public interface InstructorInterface extends JpaRepository<Instructor, Long> {
}
