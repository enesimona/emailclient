import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';

import { EmailShowComponent } from './email-show.component';

describe('EmailShowComponent', () => {
  let component: EmailShowComponent;
  let fixture: ComponentFixture<EmailShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailShowComponent ],
      providers: [ActivatedRoute]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
