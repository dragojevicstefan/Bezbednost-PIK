import { Component, OnInit } from '@angular/core';
import {Certificate} from "../../models/certificate";
import {MatTableDataSource} from "@angular/material/table";
import {Log} from "../../models/log";
import {LogService} from "../../services/log.service";

@Component({
  selector: 'app-log-info-list',
  templateUrl: './log-info-list.component.html',
  styleUrls: ['./log-info-list.component.css']
})
export class LogInfoListComponent implements OnInit {

  displayedColumns: string[] = ['eventId', 'timestamp', 'sourceName', 'logType', 'message'];
  myResponse: Log[];
  dataSource: MatTableDataSource<Log>;
  constructor(private logService: LogService) { }

  ngOnInit(): void {
    this.logService.getAllLogs().subscribe(
      data => {
        this.myResponse = data;
        console.log(data);
        this.dataSource = new MatTableDataSource<Log>(this.myResponse);
      },
      error => {
        console.log('Error occured', error);
      }
    );
  }

}
