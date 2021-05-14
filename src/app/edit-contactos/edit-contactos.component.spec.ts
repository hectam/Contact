import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditContactosComponent } from './edit-contactos.component';

describe('EditContactosComponent', () => {
  let component: EditContactosComponent;
  let fixture: ComponentFixture<EditContactosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditContactosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditContactosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
