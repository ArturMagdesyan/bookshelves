import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShelveFormComponent } from './shelve-form.component';

describe('ShelveFormComponent', () => {
  let component: ShelveFormComponent;
  let fixture: ComponentFixture<ShelveFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShelveFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShelveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
