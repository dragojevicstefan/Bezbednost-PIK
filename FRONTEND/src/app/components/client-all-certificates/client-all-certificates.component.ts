import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {Certificate} from "../../models/certificate";
import {CertificateServiceService} from "../../services/certificate-service.service";

@Component({
  selector: 'app-client-all-certificates',
  templateUrl: './client-all-certificates.component.html',
  styleUrls: ['./client-all-certificates.component.css']
})
export class ClientAllCertificatesComponent implements OnInit {

  displayedColumns: string[] = ['issName', 'subjName', 'serialNumber', 'startDate', 'endDate'];
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
}
