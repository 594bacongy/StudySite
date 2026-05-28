package com.roy.flashcard_app;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import java.util.List;



@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:4200")
public class RESTController {
    
private final FlashcardRepository repository;

public RESTController(FlashcardRepository repository) {
    this.repository = repository;
}

     @GetMapping("/flashcards")
    public List<Flashcard> getFlashcards() {

    return repository.findAll();
    }
    @GetMapping("/flashcards/{id}")
   public Flashcard getFlashcardById(@PathVariable int id) {
        return repository.findById(id).orElse(null);
    }

    @PostMapping("/flashcards")
    public Flashcard createFlashcard(@RequestBody Flashcard flashcard){
        return repository.save(flashcard);
    }

    @DeleteMapping("/flashcards/{id}")
    public String deleteFlashcard(@PathVariable int id) {

    repository.deleteById(id);

    return "Flashcard deleted";

}
    
}
