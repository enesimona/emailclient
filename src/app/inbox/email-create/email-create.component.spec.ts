import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthService } from 'src/app/auth/auth.service';
import { EmailService } from '../email.service';

import { EmailCreateComponent } from './email-create.component';

describe('EmailCreateComponent', () => {
  let component: EmailCreateComponent;
  let fixture: ComponentFixture<EmailCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailCreateComponent ],
      imports: [HttpClientTestingModule],
      providers: [EmailService, AuthService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
