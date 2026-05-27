package com.roy.flashcard_app;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;



@RestController
@RequestMapping("/api")
public class RESTController {


     @GetMapping("/flashcards")
    public String getFlashcards() {
        Flashcard flashcard = new Flashcard(1, "user1", "What is Java?", "A programming language");

       String question = flashcard.getQuestion();
        return question;
    }

    @GetMapping("/flashcards/{id}")
   public String getFlashcardById(@PathVariable int id) {
        return "Flashcard with ID: " + id;
    }

    @PostMapping("/flashcards")
    public String createFlashcard(@RequestBody Flashcard flashcard){
        String question = flashcard.getQuestion();
    String answer = flashcard.getAnswer();

    return "Flashcard created with question: " + question + " and answer: " + answer;
    }

    @DeleteMapping("/flashcards/{id}")
    public String deleteFlashcard(@PathVariable int id) {
        return "Flashcard deleted";
    }
    
}
