import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EmailService } from '../email.service';

import { EmailReplayComponent } from './email-replay.component';

describe('EmailReplayComponent', () => {
  let component: EmailReplayComponent;
  let fixture: ComponentFixture<EmailReplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailReplayComponent ],
      imports: [HttpClientTestingModule],
      providers: [EmailService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailReplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
