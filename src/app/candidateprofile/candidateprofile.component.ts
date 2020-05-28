import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { RegisterdataService } from '../registerdata.service';
import csc from 'country-state-city';
@Component({
  selector: 'app-candidateprofile',
  templateUrl: './candidateprofile.component.html',
  styleUrls: ['./candidateprofile.component.scss']
})
export class CandidateprofileComponent implements OnInit {
  uemail = '';
  res;
  firstName;
  lastName;
  email;
  contact;
  qulifications = ['under ssc', 'graduate', 'post graduate', 'hsc', 'ssc', 'diploma'];
  resume;
  pass;
  city;
  check = false;
  states = [];
  cities = [];
  qulification1;
  qulification = '';
  selectedCity = '';
  state = '';
  exp;
  val = false;
  userObj;
  password;
  constructor(private router: ActivatedRoute, private reg: RegisterdataService) { }

  ngOnInit() {
    this.states = csc.getStatesOfCountry('101');
    this.router.params.subscribe(params => {
      this.uemail = params.email;
      console.log(this.uemail);

    });

    this.res = localStorage.getItem('registerCandidate');
    JSON.parse(this.res).forEach((item) => {

      if (item.email === this.uemail) {
        console.log(item);
        this.firstName = item.firstName;
        this.lastName = item.lastName;
        this.selectedCity = item.city;
        this.state = item.state;
        this.email = item.email;
        this.contact = item.mobile;
        this.password = item.password;
        if (item.details && item.details['Qulification']) {
          this.qulification = item.details['Qulification'];
        }
        else {
          this.qulification = '';
        }
        this.exp = item.details ? item.details['experience'] : 0;
        // this.resume = item.details['resume'];
        this.selected(this.state);
      }
    });
  }
  selected(s) {
    this.city = this.states.filter((item) => {
      return item.name === s;
    });
    this.cities = csc.getCitiesOfState(this.city[0].id);
  }

  onSubmitUser(formval: NgForm) {

    if (formval.valid) {
      let arr = JSON.parse(localStorage.getItem('registerCandidate'));

      console.log(arr);
      let obj;
      this.val = true;
      arr.forEach((item) => {
        if (item.email === this.uemail) {

          item.firstName = formval.value.firstName;
          item.lastName = formval.value.lastName;
          item.mobile = formval.value.contact;
          item.email = formval.value.email;
          item.state = formval.value.state;
          item.city = formval.value.selectedCity;
          item.details = {
            Qulification: formval.value.qulification,
            experience: formval.value.exp, resume: formval.value.resume
          };
        }
      });
      this.reg.newCandidate = [];
      arr.forEach((item) => {
        this.reg.setRegisterDataCandidate(item);
      });
      setTimeout(() => { this.val = false }, 1000);
      localStorage.removeItem('registerCandidate');
      localStorage.setItem('registerCandidate', JSON.stringify(this.reg.getRegisterDataCandidate()));
    }
  }
  logout() {
    localStorage.removeItem('userDetails');
  }
  checkResume(r) {
    // console.log(r[0].name.length);
    let temp = r[0].name;
    let res = temp.split('.');
    console.log(res);

    if (res[1] === '.txt' || res[1] === 'pdf') {
      this.check = false;
      console.log('hi');

    } else {
      this.check = true;
    }


  }
}
