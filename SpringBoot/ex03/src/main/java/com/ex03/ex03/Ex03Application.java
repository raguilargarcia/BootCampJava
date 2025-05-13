package com.ex03.ex03;

import model.Frase;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.List;
import java.util.ArrayList;

@SpringBootApplication
@RestController
public class Ex03Application {

	public static void main(String[] args) {
		SpringApplication.run(Ex03Application.class, args);
	}

	public List<Frase> ex()
	{
		List<Frase> frases = new ArrayList<>();
		frases.add(new Frase(1, "El éxito es la suma de pequeños esfuerzos repetidos día tras día.", "Robert Collier"));
		frases.add(new Frase(2, "Cree en ti y todo será posible.", "Anónimo"));
		frases.add(new Frase(3, "No cuentes los días, haz que los días cuenten.", "Muhammad Ali"));
		frases.add(new Frase(4, "El único modo de hacer un gran trabajo es amar lo que haces.", "Steve Jobs"));
		frases.add(new Frase(5, "Nuestra mayor gloria no está en no caer nunca, sino en levantarnos cada vez que caemos.", "Confucio"));
		frases.add(new Frase(6, "La mejor manera de predecir el futuro es crearlo.", "Peter Drucker"));
		frases.add(new Frase(7, "Haz lo que puedas, con lo que tengas, donde estés.", "Theodore Roosevelt"));
		frases.add(new Frase(8, "No importa lo lento que vayas mientras no te detengas.", "Confucio"));
		frases.add(new Frase(9, "El éxito no es la clave de la felicidad. La felicidad es la clave del éxito.", "Albert Schweitzer"));
		frases.add(new Frase(10, "Todo parece imposible hasta que se hace.", "Nelson Mandela"));

		return frases;
	}

	List<Frase> frases = ex();

	@GetMapping("/frases")
	public List<Frase> mostrarFrases()
	{
		return frases;
	}
	@PostMapping("/frases")
	public void agregarFrase(@RequestBody Frase nuevaFrase){
		frases.add(nuevaFrase);
	}
	@GetMapping("/frases/{id}")
	public List<Frase> mostrarFrasesPorId(@PathVariable int id)
	{
		return Collections.singletonList(frases.get(id - 1));
	}




}
