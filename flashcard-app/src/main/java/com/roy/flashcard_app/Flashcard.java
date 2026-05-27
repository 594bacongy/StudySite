package com.roy.flashcard_app;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;


@Entity
@Table(name = "flashcards")
public class Flashcard {
    @Id
    private int id;
    private String user_id;
    private String question;
    private String answer;

    public Flashcard() {
    }

    public Flashcard(int id, String user_id, String question, String answer) {
        this.id = id;
        this.user_id = user_id;
        this.question = question;
        this.answer = answer;
    }

    public int getId() {
        return id;
    }

    public String getUser_id() {
        return user_id;
    }

    public String getQuestion() {
        return question;
    }

    public String getAnswer() {
        return answer;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setUser_id(String user_id) {
        this.user_id = user_id;
    }

    public void setQuestion(String question) {
        this.question = question;
    }

    public void setAnswer(String answer) {
        this.answer = answer;
    }


}
