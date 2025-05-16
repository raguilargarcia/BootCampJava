package com.ex03.ex03;

import com.ex03.ex03.model.Frase;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.ex03.ex03.service.FraseService;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/frases")
public class FraseController {
    private final FraseService fraseService;

    @Autowired
    public FraseController(FraseService fraseService) {
        this.fraseService = fraseService;
    }

    @GetMapping("")
    public List<Frase> mostrarFrases()
    {
        return fraseService.showAllFrases();
    }

    @GetMapping("/{id}")
    public Optional<Frase> mostrarFrase(@RequestParam Long id)
    {
        return fraseService.showFrase(id);
    }

    @PostMapping("")
    public Frase addFrase(@RequestBody Frase frase)
    {
       return fraseService.saveFrase(frase);
    }

}
