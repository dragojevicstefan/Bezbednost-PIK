import { Component, OnInit } from '@angular/core';
import {CertificateModel} from '../../models/certificateModel';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Router} from '@angular/router';
import {UserService} from '../../services/user.service';
import {LogModel} from '../../models/logModel';
import {LogType} from '../../models/logType';
import {LogService} from '../../services/log.service';
import {AuthService} from '../../services/auth.service';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-add-selfsigned',
  templateUrl: './add-selfsigned.component.html',
  styleUrls: ['./add-selfsigned.component.css']
})
export class AddSelfsignedComponent implements OnInit {
  registerForm: FormGroup;
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

  constructor(private http: HttpClient, private router: Router, private userService: UserService,
              private logService: LogService, private authService: AuthService,
              private formBuilder: FormBuilder,) { }

  ngOnInit(): void {


  }


  generateSelfSignedCertificate() {
    const url = 'https://localhost:8443/api/certificate/selfSigned/generate';
    this.http.post(url, this.model).subscribe(
      res => {
        const logModel= new LogModel(LogType.INFO, this.authService.getEmail(), 'Self-signed created',3);
        this.logService.addLog(logModel).subscribe();
        this.router.navigate(['/admin/home']);
        alert('Uspesno');
      },
      error => {
        alert('Error');
        const logModel= new LogModel(LogType.INFO, this.authService.getEmail(), 'Error creating self-signed certificate',6);
        this.logService.addLog(logModel).subscribe();
        console.log('Error');
      }
    );
  }

}
