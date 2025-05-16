package com.sheet03.ejercicioPersistencia.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
@Entity
public class Direccion {

    @OneToOne
    @JoinColumn(name = "student_id")
    private Estudiante student;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    private String street;

    @NotNull
    private String city;

    @NotNull
    @Column(length = 5)
    private int post_code;
}
