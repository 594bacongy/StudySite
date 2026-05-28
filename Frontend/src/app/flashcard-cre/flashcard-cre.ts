import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-flashcard-cre',
  imports: [CommonModule, FormsModule],
  templateUrl: './flashcard-cre.html',
  styleUrl: './flashcard-cre.css',
})
export class FlashcardCre implements OnInit {
  user_id = '';
  flashcards: any[] = [];
  isLoading = false;
  errorMsg = '';

  newFlashcard = {
    user_id: '',
    question: '',
    answer: ''
  };

  apiUrl = 'http://localhost:8080/api/flashcards';

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    if (typeof window === 'undefined') {
  return;
}
const stored = window.localStorage.getItem('user_id');

    if (!stored) {
      this.router.navigate(['/login']);
      return;
    }
    this.user_id = stored;
    this.loadFlashcards();
  }

  loadFlashcards() {
    this.isLoading = true;
    this.errorMsg = '';
    this.http.get<any[]>(this.apiUrl).subscribe({
      next: (data) => {
        this.flashcards = data;
        this.isLoading = false;
      },
      error: () => {
        this.errorMsg = 'Could not load flashcards. Is the backend running?';
        this.isLoading = false;
      }
    });
  }

  createFlashcard() {
    const trimmedQ = this.newFlashcard.question.trim();
    const trimmedA = this.newFlashcard.answer.trim();
    if (!trimmedQ || !trimmedA) return;

    const payload = {
      user_id: this.user_id,
      question: trimmedQ,
      answer: trimmedA
    };

    this.http.post<any>(this.apiUrl, payload).subscribe({
      next: () => {
        this.newFlashcard.question = '';
        this.newFlashcard.answer = '';
        this.loadFlashcards();
      },
      error: () => {
        this.errorMsg = 'Failed to save flashcard.';
      }
    });
  }

  deleteFlashcard(id: number) {
    this.http.delete(`${this.apiUrl}/${id}`, { responseType: 'text' }).subscribe({
      next: () => {
        this.loadFlashcards();
      },
      error: () => {
        this.errorMsg = 'Failed to delete flashcard.';
      }
    });
  }

  logout() {
    if (typeof window !== 'undefined') {
  window.localStorage.removeItem('user_id');
}
    this.router.navigate(['/login']);
  }
}