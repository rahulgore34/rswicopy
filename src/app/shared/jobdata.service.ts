import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JobdataService {
  jobs = [];
  constructor() { }

  setJobDetails(jobdetailsobj: any) {
    this.jobs.push(jobdetailsobj);
  }

  getJobDetails() {
    return this.jobs;
  }

  isLoggedIn() {
    return !!localStorage.getItem('userDetails');
  }
}
