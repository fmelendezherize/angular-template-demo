import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUserSingleComponent } from './admin-user-single.component';

describe('AdminUserSingleComponent', () => {
  let component: AdminUserSingleComponent;
  let fixture: ComponentFixture<AdminUserSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminUserSingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUserSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
