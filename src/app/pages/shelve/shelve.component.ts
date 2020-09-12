import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {ShelvesService} from '../../services/shelves.service';
import {IShelve} from '../../../models/shelve';

@Component({
  templateUrl: './shelve.component.html',
  styleUrls: ['./shelve.component.scss']
})
export class ShelveComponent implements OnInit {
  shelve: IShelve;
  constructor(
    private route: ActivatedRoute,
    private shelvesService: ShelvesService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(param => {
      const {id} = param;
      this.shelvesService.getOne(id).subscribe(shelve => this.shelve = shelve);
    });
  }

}
