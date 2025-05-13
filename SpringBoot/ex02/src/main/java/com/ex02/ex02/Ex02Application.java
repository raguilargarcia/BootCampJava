package com.ex02.ex02;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class Ex02Application {

	public static void main(String[] args) {
		SpringApplication.run(Ex02Application.class, args);
	}

	@RequestMapping("/suma/{a}/{b}")
	public int suma(@PathVariable int a, @PathVariable int b)
	{
		return a + b;
	}

	@RequestMapping(value = "/multiplica", params = {"a", "b"})
	public int multiplica(@RequestParam int a, @RequestParam int b)
	{
		return a * b;
	}
}
