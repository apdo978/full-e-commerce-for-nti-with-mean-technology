import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminpanalComponent } from './adminpanal.component';

describe('AdminpanalComponent', () => {
  let component: AdminpanalComponent;
  let fixture: ComponentFixture<AdminpanalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminpanalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminpanalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
