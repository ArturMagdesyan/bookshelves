import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import Swal from 'sweetalert2';

import { ShelvesService } from '../../services/shelves.service';

@Component({
  selector: 'app-shelve-form',
  templateUrl: './shelve-form.component.html',
  styleUrls: ['./shelve-form.component.scss']
})
export class ShelveFormComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private shelvesService: ShelvesService
  ) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.pattern(/\S/)]],
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
    this.shelvesService.create(this.registerForm.value.name);
    Swal.fire({
      icon: 'success',
      text: 'Shelf successfully created!',
    });
    this.onReset();
  }

  onReset(): void {
    this.submitted = false;
    this.registerForm.reset();
  }

}
