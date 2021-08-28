import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SignupComponent } from './signup/signup.component';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

interface UsernameAvailableResponse {
  available: boolean;
}

interface SignupCredentials{
  username:string;
  password:string;
  passwordConfirmation:string;
}

interface SigninCredentials{
  username:string;
  password:string;
}

interface SignupResponse{
  username:string;
}

interface SignedInResponse{
  authenticated:boolean;
  username:string;
}

interface SignInResponse{
  username:string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  rootURL = 'https://api.angular-email.com';
  signedIn$ = new BehaviorSubject(null);
  username='';

  constructor(private http: HttpClient) {}

  usernameAvailable(username: string) {
    return this.http.post<UsernameAvailableResponse>(
      `${this.rootURL}/auth/username`,
      {
        username
      }
    );
  }

  signup(credentials: SignupCredentials){
    return this.http.post<SignupResponse>(
      `${this.rootURL}/auth/signup`, credentials, 
    ).pipe(
      tap((response)=>{
        this.signedIn$.next(true);
        this.username=response.username;
      })
    );
  }

  checkAuth() {
    return this.http.get<SignedInResponse>(
      `${this.rootURL}/auth/signedin`, 
    )
    .pipe(
      tap(({authenticated, username})=>{
       this.signedIn$.next(authenticated);
       this.username=username;
      })
    )
  }

  signOut() {
    //delete cookie - token after sign out
    return this.http.post<any>(`${this.rootURL}/auth/signout`, {})
    .pipe(
      tap(()=>{
        this.signedIn$.next(false);
      })
    )
  }

  signIn(signinCredentials: SigninCredentials){
    return this.http.post<SignInResponse>(`${this.rootURL}/auth/signin`, signinCredentials)
    .pipe(
      tap((response)=>{
        this.signedIn$.next(true);
        this.username=response.username;
      })
    )

  }
}
