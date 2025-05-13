package com.ex04.ex04;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.*;

import model.Tarea;

import java.util.ArrayList;
import java.util.List;

@SpringBootApplication
@RestController
public class Ex04Application {

	public static void main(String[] args) {
		SpringApplication.run(Ex04Application.class, args);
	}

	public List<Tarea> ex()
	{
		List<Tarea> tareas = new ArrayList<>();
		tareas.add(new Tarea(1, "Lavar los platos", false));
		tareas.add(new Tarea(2, "Sacar la basura", true));
		tareas.add(new Tarea(3, "Hacer la cama", false));
		tareas.add(new Tarea(4, "Regar las plantas", true));
		tareas.add(new Tarea(5, "Doblar la ropa", false));
		tareas.add(new Tarea(6, "Barrer el piso", true));
		tareas.add(new Tarea(7, "Limpiar el escritorio", false));
		tareas.add(new Tarea(8, "Organizar la despensa", true));
		tareas.add(new Tarea(9, "Pagar las facturas", false));
		tareas.add(new Tarea(10, "Preparar el almuerzo", true));

		return tareas;
	}

	List<Tarea> tareas = ex();

	@GetMapping("/tareas")
	public List<Tarea> mostrarTareas()
	{
		return tareas;
	}
}
