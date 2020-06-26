import {LogType} from './logType';

export class Log{
  timestamp: any;
  logType: LogType;
  sourceName: string;
  eventId: number;
  message: string;
  constructor(timestamp: any, logType: LogType, sourceName: string, eventId: number, message: string)
  {
    this.timestamp=timestamp;
    this.logType=logType;
    this.sourceName=sourceName;
    this.eventId=eventId;
    this.message=message;
  }
}
