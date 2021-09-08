import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { AuthService } from '../auth.service';
import { UniqueUsername } from './unique-username';

describe('UniqueUsername', () => {
  let service:AuthService;
  beforeEach(()=>{
    TestBed.configureTestingModule({
      declarations: [UniqueUsername],
      imports:[HttpClientTestingModule],
      providers: [
        {provide:AuthService}
      ]
    });
    service = TestBed.get(AuthService);
  })
  xit('should create an instance', () => {
    expect(new UniqueUsername(service)).toBeTruthy();
  });
});
