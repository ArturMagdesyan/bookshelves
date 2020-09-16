import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import Swal from 'sweetalert2';

import { ShelvesState } from '../../../store/reducers/shelves';
import { INewShelve, IShelve } from '../../../models/shelve';
import { ShelvesService } from '../../services/shelves.service';

@Component({
  selector: 'app-shelves-list',
  templateUrl: './shelves-list.component.html',
  styleUrls: ['./shelves-list.component.scss']
})
export class ShelvesListComponent implements OnInit {
  shelves: IShelve[];

  constructor(
    private shelvesService: ShelvesService,
    private store: Store<ShelvesState>,
  ) { }

  ngOnInit(): void {
    this.shelvesService.getAll().subscribe(shelves => this.shelves = shelves);
  }

  public delete(shelve: IShelve): void {
    const {name, id} = shelve;
    Swal.fire({
      title: 'Are you sure?',
      text: `You really want to delete the shelve: ${name}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.shelvesService.delete(id);
        Swal.fire({
          icon: 'success',
          text: `Shelf ${ name } successfully deleted!`,
        });
      }
    });
  }

  public update(shelve: IShelve): void {
    const { id } = shelve;
    let newName: string;

    Swal.fire({
      title: 'Please enter shelve name',
      input: 'text',
      inputAttributes: {
        autocapitalize: 'off'
      },
      showCancelButton: true,
      confirmButtonText: 'Save',
      preConfirm: shelfname => {
        newName = shelfname;
      },
    }).then((result) => {
      if (newName.trim()) {
        this.shelvesService.update({name: newName, id});
        Swal.fire({
          icon: 'success',
          text: 'Shelf name successfully changed!',
        });
      } else {
        Swal.fire({
          icon: 'error',
          text: 'Shelf name required!',
        });
      }
    });
  }
}
