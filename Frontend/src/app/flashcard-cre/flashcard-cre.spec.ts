import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashcardCre } from './flashcard-cre';

describe('FlashcardCre', () => {
  let component: FlashcardCre;
  let fixture: ComponentFixture<FlashcardCre>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlashcardCre],
    }).compileComponents();

    fixture = TestBed.createComponent(FlashcardCre);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
