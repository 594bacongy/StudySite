import { Routes } from '@angular/router';
import { Login } from './login/login';
import { FlashcardCre } from './flashcard-cre/flashcard-cre';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: Login },
  { path: 'dashboard', component: FlashcardCre },
  { path: '**', redirectTo: 'login' }
];
