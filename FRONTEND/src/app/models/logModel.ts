import {LogType} from './logType';

export class  LogModel {
  logType: LogType;
  sourceName: string;
  message: string;
  eventId: number;
  constructor(logType: LogType, sourceName: string, message: string,eventId: number)
  {
    this.logType=logType;
    this.sourceName=sourceName;
    this.message=message;
    this.eventId=eventId;
  }
}
