import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpHandler,
  HttpEvent,
  HttpRequest
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {AuthService} from '../services/auth.service';
import {CertificateServiceService} from '../services/certificate-service.service';

// Add class for intercepting http request to add jwt token in header

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private authenticationService: AuthService,
              private certificateService: CertificateServiceService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token');
    if (token) {
      request = request.clone({
        setHeaders: {
          'X-Auth-Token': token
        }
      });
    }
    return next.handle(request);
  }
}
