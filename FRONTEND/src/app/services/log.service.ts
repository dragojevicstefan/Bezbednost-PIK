import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Certificate} from "../models/certificate";
import {environment} from "../../environments/environment";
import {Log} from "../models/log";
import {LogModel} from "../models/logModel";

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor(private http: HttpClient) { }

  public getAllLogs(): Observable<Log[]> {
    return this.http.get<Array<Log>>(environment.baseUrl + '/api/log/allLogs');
  }

  public addLog(log: LogModel) {
    return this.http.post(`${environment.baseUrl}/api/log`, log, { responseType: 'text' });
  }
}
