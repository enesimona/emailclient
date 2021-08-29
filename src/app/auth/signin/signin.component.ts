import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  signInForm = new FormGroup(
    {
      username: new FormControl('', [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20)
        ]
      ),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(20)
      ]),
    },
    { validators: [] }
  );

  constructor(private authService:AuthService, private router:Router) { }

  ngOnInit() {
  }

  onSubmit(){
    if(this.signInForm.invalid){
      return;
    }
  
    this.authService.signIn(this.signInForm.value).subscribe({
      next: ()=>{
        this.router.navigateByUrl('/inbox');
      },
      error:({error})=>{
        if(error.username || error.password) {
          this.signInForm.setErrors({credentials:true})
        }
      }
    })
  }

}
