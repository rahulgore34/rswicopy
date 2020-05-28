import { Component, OnInit } from '@angular/core';
import csc from 'country-state-city';
import { NgForm } from '@angular/forms';
import { RegisterdataService } from '../registerdata.service';
import { from } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  states = [];
  cities = [];
  city;
  flag = false;
  val = false;
  constructor(private reg: RegisterdataService, private router: Router) {

  }

  ngOnInit() {
    this.states = csc.getStatesOfCountry('101');
  }
  selected(s) {
    this.city = this.states.filter((item) => {
      return item.name === s;
    });

    this.cities = csc.getCitiesOfState(this.city[0].id);
    console.log(this.cities);

  }
  check(p, c) {
    if (p === c) {
      this.flag = false;
      // console.log('match');
    }
    else {
      // console.log('not');
      this.flag = true;
    }
  }
  onSubmit(formval: NgForm) {

    if (formval.valid) {
      // save in service job details array
      this.val = true;

      let obj = {
        id: this.reg.newEmployer.length,
        companyName: formval.value.companyName,
        HeadOffice: formval.value.companyHeadOffice,
        mobile: formval.value.contact,
        email: formval.value.email,
        state: formval.value.state,
        city: formval.value.city,
        password: formval.value.password
      };
      setTimeout(() => {
        this.val = false;
        this.router.navigate(['/login']);
      }, 4000);
      this.reg.setRegisterDataEmployer(obj);
      formval.reset();
    }
    this.reg.getRegisterDataEmployer();
  }
  onSubmitUser(formval: NgForm) {

    if (formval.valid) {
      this.val = true;
      let obj = {
        id: this.reg.newCandidate.length,
        firstName: formval.value.firstName,
        lastName: formval.value.lastName,
        mobile: formval.value.contact,
        email: formval.value.email,
        state: formval.value.state,
        city: formval.value.city,
        password: formval.value.password
      };
      this.reg.setRegisterDataCandidate(obj);
      formval.reset();
      setTimeout(() => {
        this.val = false;
        this.router.navigate(['/login']);
      }, 2000);
    }
    this.reg.getRegisterDataCandidate();
    formval.reset();
  }
}


