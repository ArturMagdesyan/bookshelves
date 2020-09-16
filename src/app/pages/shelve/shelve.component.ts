import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, } from '@angular/router';

import { ShelvesService } from '../../services/shelves.service';
import { IShelve } from '../../../models/shelve';

@Component({
  templateUrl: './shelve.component.html',
  styleUrls: ['./shelve.component.scss']
})
export class ShelveComponent implements OnInit {
  shelve: IShelve = {
    id: '',
    name: '',
  };

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private shelvesService: ShelvesService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(param => {
      const { id } = param;
      this.shelvesService.getOne(id).subscribe(shelve => {
        if (!shelve) {
          return this.router.navigateByUrl('/');
        }
        this.shelve = shelve;
      });
    });
  }

}
