package com.sheet03.ejercicioPersistencia.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

import java.util.Set;

@Data
@Entity
public class Curso {

    @ManyToOne
    @JoinColumn(name = "instructor_id")
    private Instructor instructor;

    @ManyToMany(mappedBy = "courses")
    Set<Estudiante> students;

    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    private String name;

    @NotNull
    private String description;

    public Curso(Long id, String name, String desc)
    {
        this.id = id;
        this.name = name;
        this.description = desc;
    }
}
