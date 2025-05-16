package com.sheet03.ejercicioPersistencia.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

import java.util.Set;

@Data
@Entity
public class Estudiante {

    @OneToOne
    @JoinColumn(name = "address_id")
    private Direccion address;

    @ManyToMany
    @JoinTable(
            name = "student_course",
            joinColumns = @JoinColumn(name = "student_id"),
            inverseJoinColumns = @JoinColumn(name = "course_id")
    )
    private Set<Curso> courses;

    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    private String name;

    @Email
    private String email;

    public Estudiante(Long id, String name, String email)
    {
        this.id = id;
        this.name = name;
        this.email = email;
    }

}
