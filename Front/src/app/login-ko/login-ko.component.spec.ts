import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginKOComponent } from './login-ko.component';

describe('LoginKOComponent', () => {
  let component: LoginKOComponent;
  let fixture: ComponentFixture<LoginKOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginKOComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoginKOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
