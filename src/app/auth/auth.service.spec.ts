import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

import { AuthService } from './auth.service';
import { HttpParams } from '@angular/common/http';
import { SignedInResponse } from '../shared/dto/signed-in-response';
import { SignupCredentials } from '../shared/dto/signup-credentials';
import { SignupResponse } from '../shared/dto/signup-response';

describe('AuthService', () => {
  let service:AuthService;
  let httpMock: HttpTestingController;
  let rootURL = 'https://api.angular-email.com';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers:[AuthService]
    });
    service = TestBed.get(AuthService);
    httpMock = TestBed.get(HttpTestingController);
  });

  afterEach(()=>{
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve the authentication status and username from backend api via GET', ()=>{
    const signedInResponseMock = new SignedInResponse();
    service.checkAuth().subscribe((response=> expect(response).toEqual(signedInResponseMock)))

    const request = httpMock.expectOne(req=>req.url=== `${rootURL}/auth/signedin`);
    expect(request.request.method).toBe('GET');
  });

  it('should send object to backend via POST', ()=>{
    const credentialsMock = new SignupCredentials();
    credentialsMock.username='simona';
    credentialsMock.password='12345';
    credentialsMock.passwordConfirmation='12345';

    const signupResponseMock = new SignupResponse();
    signupResponseMock.username='simona';
    service.signup(credentialsMock).subscribe((response=> expect(response).toEqual(credentialsMock)));

    const request = httpMock.expectOne(req=>req.url=== `${rootURL}/auth/signup`);
    expect(request.request.method).toBe('POST');
    expect(request.request.body).toEqual(credentialsMock);
    request.flush(credentialsMock);
  });


});
