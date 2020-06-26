import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {CertificateDB} from '../models/certificateDB';
import {Observable} from 'rxjs';
import {Certificate} from '../models/certificate';
import {environment} from '../../environments/environment';
import {UserService} from './user.service';

@Injectable({
  providedIn: 'root'
})
export class CertificateServiceService {

  private URL: string;
  constructor(private http: HttpClient, private userService: UserService) {
    this.URL = environment.baseUrl + environment.certificate;
  }

  public getAllCertificates(): Observable<Certificate[]> {
    return this.http.get<Array<Certificate>>(environment.baseUrl + '/api/certificate/allCertificates');
  }

  public revokeCertificate(certificate: Certificate) {
    return this.http.post<Certificate>(environment.baseUrl + '/api/certificate/revoke', certificate);
  }

  public checkCertificateStatus(certificate: Certificate) {
    return this.http.post<Certificate>(environment.baseUrl + '/api/certificate/check', certificate);
  }

  public getAllPossibleIssuers(): Observable<CertificateDB[]> {
    return this.http.get<CertificateDB[]>( environment.baseUrl + '/api/certificate/allPossibleIssuers');
  }

  public downloadCertificate(certificate: Certificate) {
    return this.http.post<Certificate>(environment.baseUrl + '/api/certificate/download', certificate);
  }
}
