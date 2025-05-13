package model;

import lombok.Data;

@Data
public class Tarea {
    private int id;
    private String descripcion;
    private boolean completado;

    public Tarea(int id, String descripcion, boolean completado)
    {
        this.id = id;
        this.descripcion = descripcion;
        this.completado = completado;
    }
}
