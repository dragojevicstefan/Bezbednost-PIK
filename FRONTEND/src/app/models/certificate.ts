export class Certificate {

  id: number;
  subjName: string;
  subjOrgName: string;
  subjCountry: string;

  issName: string;
  issOrgName: string;
  issCountry: string;

  serialNumber: string;
  endDate: any;
  startDate: any;

  // tslint:disable-next-line:max-line-length
  constructor(id: number, subjName: string, subjOrgName: string, subjCountry: string, issName: string, issOrgName: string, issCountry: string, serialNumber: string, endDate: any, startDate: any){
    this.subjName = this.subjName;
    this.subjOrgName = subjOrgName;
    this.subjCountry = subjCountry;
    this.issName = issName;
    this.issOrgName = issOrgName;
    this.issCountry = issCountry;
    this.serialNumber = serialNumber;
    this.endDate = endDate;
    this.startDate = startDate;
    this.id = id;
  }
}
