import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { EmailResolverService } from './email-resolver.service';
import { EmailService } from './email.service';

describe('EmailResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule, RouterTestingModule],
    providers:[EmailService]
  }));

  it('should be created', () => {
    const service: EmailResolverService = TestBed.get(EmailResolverService);
    expect(service).toBeTruthy();
  });
});
