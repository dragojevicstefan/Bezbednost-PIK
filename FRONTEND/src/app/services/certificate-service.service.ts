import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CertificateDB} from '../models/certificateDB';
import {Observable} from 'rxjs';
import {Certificate} from '../models/certificate';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CertificateServiceService {

  private URL: string;
  constructor(private http: HttpClient) {
    this.URL = environment.baseUrl + environment.certificate;
  }

  public getAllCertificates(): Observable<Certificate[]> {
    return this.http.get<Certificate[]>(this.URL + '/allCertificates');
  }

  public revokeCertificate(certificate: Certificate) {
    return this.http.post<Certificate>(this.URL + '/revoke', certificate);
  }

  public checkCertificateStatus(certificate: Certificate) {
    return this.http.post<Certificate>(this.URL + '/check', certificate);
  }

  public getAllPossibleIssuers(): Observable<CertificateDB[]> {
    return this.http.get<CertificateDB[]>( this.URL + '/allPossibleIssuers');
  }

  public downloadCertificate(certificate: Certificate) {
    return this.http.post<Certificate>(this.URL + '/download', certificate);
  }
}
