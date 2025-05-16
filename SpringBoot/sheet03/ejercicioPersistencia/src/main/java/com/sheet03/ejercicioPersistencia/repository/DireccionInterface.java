package com.sheet03.ejercicioPersistencia.repository;

import com.sheet03.ejercicioPersistencia.model.Direccion;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DireccionInterface extends JpaRepository<Direccion, Long> {
}
