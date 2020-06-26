import { Component, OnInit } from '@angular/core';
import {CertificateModel} from '../../models/certificateModel';
import {HttpClient, HttpParams} from '@angular/common/http';
import {CertificateServiceService} from '../../services/certificate-service.service';
import {CertificateDB} from '../../models/certificateDB';
import {UserService} from '../../services/user.service';
import {LogModel} from "../../models/logModel";
import {LogType} from "../../models/logType";
import {AuthService} from "../../services/auth.service";
import {LogService} from "../../services/log.service";
import {Router} from "@angular/router";

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
              private certService: CertificateServiceService,
              private userService: UserService,
              private authService: AuthService,
              private logService: LogService,
              private router: Router) {}

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
    const url = 'https://localhost:8443/api/certificate/generate';
    this.http.post(url, this.model).subscribe(
      res => {
        const logModel= new LogModel(LogType.INFO, this.authService.getEmail(), 'Certificate created',4);
        this.logService.addLog(logModel).subscribe();
        this.router.navigate(['/admin/home']);
        alert('Uspesno');
      },
      error => {
        const logModel= new LogModel(LogType.ERROR, this.authService.getEmail(), 'Error creating certificate',5);
        this.logService.addLog(logModel).subscribe();
        alert('Error');
      }
    );
  }


}
