package com.sheet03.ejercicioPersistencia.model;


import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import lombok.Data;

import java.util.List;


@Data
@Entity
public class Instructor {

    @OneToMany(mappedBy = "instructor")
    private List<Curso> course;

    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    private String name;

    @Email
    private String email;

    public Instructor(Long id, String name, String email)
    {
        this.id = id;
        this.email = email;
        this.name = name;
    }
}
