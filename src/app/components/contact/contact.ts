import { Component, signal } from '@angular/core';
import { CommonModule }      from '@angular/common';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.scss']
})
export class Contact {
  sent = signal(false);
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name:    ['', Validators.required],
      email:   ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.sent.set(true);
      this.form.reset();
    }
  }
}
