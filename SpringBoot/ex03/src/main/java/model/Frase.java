package model;

import lombok.Data;

@Data
public class Frase {
    private int id;
    private String texto;
    private String autor;

    public Frase(int id, String texto, String autor)
    {
        this.id = id;
        this.texto = texto;
        this.autor = autor;
    }
}
