import { Component, OnInit } from '@angular/core';
import {CertificateServiceService} from '../../services/certificate-service.service';
import {Certificate} from '../../models/certificate';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-all-certificates',
  templateUrl: './all-certificates.component.html',
  styleUrls: ['./all-certificates.component.css']
})
export class AllCertificatesComponent implements OnInit {

  // tslint:disable-next-line:max-line-length
  displayedColumns: string[] = ['issName', 'subjName', 'serialNumber', 'startDate', 'endDate', 'download', 'revoke','check'];
  myResponse: Certificate[];
  dataSource: MatTableDataSource<Certificate>;
  constructor(private certService: CertificateServiceService) { }

  ngOnInit(): void {
    this.certService.getAllCertificates().subscribe(
      data => {
        this.myResponse = data;
        console.log(data);
        this.dataSource = new MatTableDataSource<Certificate>(this.myResponse);
      },
      error => {
        console.log('Error occured', error);
      }
    );
  }
  revoke(certificate: Certificate) {
    this.certService.revokeCertificate(certificate).subscribe(
      res => {
        console.log(res);
        alert('Revoked');
      },
      error => {
        alert('Error');
      }
    );
  }


  isRevoked(cert: Certificate): boolean {
    this.certService.checkCertificateStatus(cert).subscribe(
      res =>{
        alert('Already revoked');
        return true;
      }, error => {
        alert('Error revoke');
        return false;
      }
    );
    return false;
  }


  download(certificate: Certificate) {
    this.certService.downloadCertificate(certificate).subscribe(
      res => {
        alert('Downloaded');
      },
      error => {
        alert('Error');
      }
    );
  }
}
