import { Component, OnInit } from '@angular/core';
import {CertificateModel} from '../../models/certificateModel';
import {HttpClient} from '@angular/common/http';
import {CertificateServiceService} from '../../services/certificate-service.service';
import {CertificateDB} from '../../models/certificateDB';

@Component({
  selector: 'app-add-certificate',
  templateUrl: './add-certificate.component.html',
  styleUrls: ['./add-certificate.component.css']
})
export class AddCertificateComponent implements OnInit {

  model: CertificateModel = {
    startDate: '',
    endDate: '',
    serialNumber: '',
    name: '',
    surname: '',
    country: '',
    organization: '',
    organizationUnit: '',
    email: '',
    type: '',
    alias: '',
    issuerSerialNumber: '',
  };
  listOfPossibleIssuers: CertificateDB [];
  constructor(private http: HttpClient ,
              private certService: CertificateServiceService ) {}

  ngOnInit(): void {
    this.certService.getAllPossibleIssuers().subscribe(
      data => {
        this.listOfPossibleIssuers = data;
      },
      error => {
        console.log('Error occured', error);
      }
    );
  }

  generateCertificate(): void {
    const url = 'https://localhost:8443/certificate';


    this.http.post(url, this.model).subscribe(
      res => {
        alert('Uspesno');
      },
      error => {
        alert('Error');
      }
    );
  }


}
