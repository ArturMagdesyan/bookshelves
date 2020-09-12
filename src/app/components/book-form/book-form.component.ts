import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BooksService} from '../../services/books.service';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent implements OnInit {
  @Input('shelveId') shelveId: string;

  registerForm: FormGroup;
  submitted = false;

  constructor(
    private booksService: BooksService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.pattern(/\S/)]],
      authorName: ['', [Validators.required, Validators.pattern(/\S/)]],
      image: ['', [Validators.required, Validators.pattern(/\S/)]],
      isbn: ['', [Validators.required, Validators.pattern(/\S/)]],
    });
  }

  get controls(): any {
    return this.registerForm.controls;
  }

  public onSubmit(): void {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    this.booksService.create(this.shelveId, this.registerForm.value);
    this.onReset();
  }

  onReset(): void {
    this.submitted = false;
    this.registerForm.reset();
  }
}
