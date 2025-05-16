package service;

import model.Frase;
import org.springframework.stereotype.Service;
import repository.FraseRepository;

import java.util.List;
import java.util.Optional;

@Service
public class FraseService {
    private final FraseRepository fraseRepository;

    public FraseService(FraseRepository fraseRepository) {
        this.fraseRepository = fraseRepository;
    }

    public Frase saveFrase(Frase frase)
    {
        return fraseRepository.save(frase);
    }

    public List<Frase> showAllFrases()
    {
        return fraseRepository.findAll();
    }
    
    public Optional<Frase> showFrase(Long id)
    {
        return fraseRepository.findById(id);
    }
}
