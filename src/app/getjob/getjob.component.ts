import { Component, OnInit } from '@angular/core';
import { JobdataService } from '../shared/jobdata.service';
@Component({
  selector: 'app-getjob',
  templateUrl: './getjob.component.html',
  styleUrls: ['./getjob.component.scss']
})
export class GetjobComponent implements OnInit {
  job = [];
  searchName;
  searchCity;
  searchJobTitle;
  constructor(private service: JobdataService) { }

  ngOnInit() {
    this.job = JSON.parse(localStorage.getItem('postjob'));
    console.log(this.job);
  }
  checkCompanyName(e) {
    if (this.searchName === '') {
      this.job = JSON.parse(localStorage.getItem('postjob'));
    } else if (e.key === "Backspace") {
      console.log('hi');
      this.output();
    }
    this.output();
  }
  output() {
    let temp = JSON.parse(localStorage.getItem('postjob'));
    this.job = [];
    console.log(this.searchName);
    temp.filter((item) => {
      if (item.companyName.toUpperCase().startsWith(this.searchName.toUpperCase()) === true) {
        this.job.push(item);
      }
    });
  }
  checkCity(e) {
    if (this.searchCity === '') {
      this.job = JSON.parse(localStorage.getItem('postjob'));
    } else if (e.key === "Backspace") {
      console.log('hi');
      this.output1();
    }
    this.output1();
  }
  output1() {
    let temp = JSON.parse(localStorage.getItem('postjob'));
    this.job = [];
    console.log(this.searchCity);
    temp.filter((item) => {
      if (item.city.toUpperCase().startsWith(this.searchCity.toUpperCase()) === true) {
        this.job.push(item);
      }
    });
  }
  checkJobTitle(e) {
    if (this.searchJobTitle === '') {
      this.job = JSON.parse(localStorage.getItem('postjob'));
    } else if (e.key === "Backspace") {
      console.log('hi');
      this.output2();
    }
    this.output2();
  }
  output2() {
    let temp = JSON.parse(localStorage.getItem('postjob'));
    this.job = [];
    console.log(this.searchJobTitle);
    temp.filter((item) => {
      if (item.jobTitle.toUpperCase().startsWith(this.searchJobTitle.toUpperCase()) === true) {
        this.job.push(item);
      }
    });
  }
  logout() {
    localStorage.removeItem('userDetails');
  }
}
