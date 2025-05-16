package model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
public class Frase {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String texto;
    private String autor;

    public Frase(Long id, String texto, String autor)
    {
        this.id = id;
        this.texto = texto;
        this.autor = autor;
    }
}
