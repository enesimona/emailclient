import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Email } from '../email';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-email-replay',
  templateUrl: './email-replay.component.html',
  styleUrls: ['./email-replay.component.css']
})
export class EmailReplayComponent implements OnChanges {
  showModal:boolean=false;
  @Input() email:Email;

  constructor(private emailService:EmailService) { }

  ngOnChanges() {
    this.email={
      ...this.email,
      from:this.email.to,
      to:this.email.from,
      subject:`RE: ${this.email.subject}`,
      text:`\n\n\n-------- ${this.email.from} wrote:\n> ${this.email.text.replace(/\n/gi, '\n> ')}`
    }
  }

  onSubmit(email:Email){
    this.emailService.sendEmail(email).subscribe(()=>{
      this.showModal=false;
    })
  }

  // setShowModal(value:boolean){
  //   this.showModal=value;
  // }

}
