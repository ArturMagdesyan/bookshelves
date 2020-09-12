import { Component, OnInit } from '@angular/core';
import {select, Store} from '@ngrx/store';

import {ShelvesState} from '../../../store/reducers/shelves';
import {getShelves} from '../../../store/selector';
import {INewShelve, IShelve} from '../../../models/shelve';
import {ShelvesService} from '../../services/shelves.service';

@Component({
  selector: 'app-shelves-list',
  templateUrl: './shelves-list.component.html',
  styleUrls: ['./shelves-list.component.scss']
})
export class ShelvesListComponent implements OnInit {
  shelves: IShelve[];
  updateShelve: INewShelve;
  constructor(
    private shelvesService: ShelvesService,
    private store: Store<ShelvesState>,
  ) { }

  ngOnInit(): void {
    this.shelvesService.getAll().subscribe(shelves => this.shelves = shelves);
  }

  public delete(shelve: IShelve): void {
    const {name, id} = shelve;
    confirm(`You really want to delete the shelve: ${name}`) && this.shelvesService.delete(id);
  }

  public update(shelve: IShelve): void {
    const {name, id} = shelve;
    let newName: string;

    newName = prompt('Please enter shelve name', name);
    if (newName.trim()) {
      this.shelvesService.update({name: newName, id});
    }
  }
}
