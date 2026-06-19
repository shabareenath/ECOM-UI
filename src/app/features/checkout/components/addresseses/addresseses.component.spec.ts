import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressesesComponent } from './addresseses.component';

describe('AddressesesComponent', () => {
  let component: AddressesesComponent;
  let fixture: ComponentFixture<AddressesesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddressesesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddressesesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
