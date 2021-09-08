import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, FormGroup } from '@angular/forms';
import { Email } from '../email';

import { EmailFormComponent } from './email-form.component';

describe('EmailFormComponent', () => {
  let component: EmailFormComponent;
  let fixture: ComponentFixture<EmailFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailFormComponent);
    component = fixture.componentInstance;
    component.email=new Email("100", "hello", "hello there", "simona", "simona20", "hello");
    component.emailForm=new FormGroup({
      to:new FormControl(component.email.to),
      from:new FormControl(component.email.from),
      subject:new FormControl(component.email.subject),
      text:new FormControl(component.email.text),
    })
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  xit('should output when submit button is clicked', () => {
    spyOn(component.emailSubmit, 'emit');
    // component.onSubmit();
    // trigger the click
   const nativeElement = fixture.nativeElement;
   const button = nativeElement.querySelector('button');
   button.dispatchEvent(new Event('click'));

   fixture.detectChanges();

    expect(component.emailSubmit.emit).toHaveBeenCalled();
  });

  it('should output when cancel button is clicked', () => {
    spyOn(component.onCancel, 'emit');
    component.onCancelAction();
    expect(component.onCancel.emit).toHaveBeenCalled();
  });
});
