// FILE: student-card.ts
// WHAT: Defines the StudentCard component and its student input.
// WHY: Receives student data and handles missing portrait images.

import { Component, computed, input, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Student } from '../../models/student.model';

@Component({
  selector: 'app-student-card',
  imports: [RouterLink],
  templateUrl: './student-card.html',
  styleUrl: './student-card.css',
})
export class StudentCard {
  readonly student = input.required<Student>();

  // Remember whether the student's photo failed to load.
  private readonly imageFailed = signal(false);

  // Use the placeholder when the original photo cannot load.
  protected readonly photoSrc = computed(() =>
    this.imageFailed()
      ? 'images/placeholder-portrait.svg'
      : this.student().photo,
  );

  // Called when the browser cannot load the image.
  protected onImageError(): void {
    this.imageFailed.set(true);
  }
}
