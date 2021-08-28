import { Component, Input, OnInit, Output, ViewEncapsulation, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Email } from '../email';

@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.css']
 
})
export class EmailFormComponent implements OnInit {
  emailForm: FormGroup;
  @Input() email : Email;
  @Output() emailSubmit=new EventEmitter();
  @Output() onCancel=new EventEmitter();

  constructor() { }

  ngOnInit() {
    const {subject, from, to, text}=this.email;
    this.emailForm=new FormGroup({
      to:new FormControl(to, [Validators.required, Validators.email]),
      from:new FormControl({value:from, disabled:true}),
      subject:new FormControl(subject, [Validators.required]),
      text:new FormControl(text,  [Validators.required]),
    })
  }

  onSubmit(){
    if(this.emailForm.invalid){
      return;
    }

    this.emailSubmit.emit(this.emailForm.value)
  }

  onCancelAction(){
    this.emailForm.reset();
    this.onCancel.emit(true);
  }

}
