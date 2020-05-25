import { Component, OnInit } from '@angular/core';
import {CertificateModel} from '../../models/certificateModel';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-selfsigned',
  templateUrl: './add-selfsigned.component.html',
  styleUrls: ['./add-selfsigned.component.css']
})
export class AddSelfsignedComponent implements OnInit {


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
    issuerSerialNumber: ''
  };

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {


  }


  generateSelfSignedCertificate() {
    const url = 'http://localhost:8081/certificate/selfSigned/generate';
    this.http.post(url, this.model).subscribe(
      res => {
        this.router.navigate(['/admin/home']);
        alert('Uspesno');
      },
      error => {
        alert('Error.');
        console.log('Error');
      }
    );
  }

}
