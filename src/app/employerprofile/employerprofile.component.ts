import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import csc from 'country-state-city';
import { NgForm } from '@angular/forms';
import { RegisterdataService } from '../registerdata.service';

@Component({
  selector: 'app-employerprofile',
  templateUrl: './employerprofile.component.html',
  styleUrls: ['./employerprofile.component.scss']
})
export class EmployerprofileComponent implements OnInit {
  uemail;
  states = [];
  cities = [];
  city;
  companyName = '';
  companyHeadOffice = '';
  state = '';
  selectedCity = '';
  email = '';
  contact = '';
  res;
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


    this.res = localStorage.getItem('registerEmployer');
    JSON.parse(this.res).forEach((item) => {

      if (item.email === this.uemail) {
        console.log(item);
        this.companyName = item.companyName;
        this.companyHeadOffice = item.Headoffice;
        this.selectedCity = item.city;
        this.state = item.state;
        this.email = item.email;
        this.contact = item.mobile;
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
  logout() {
    localStorage.removeItem('userDetails');
  }

  onSubmit(formval: NgForm) {

    if (formval.valid) {
      let arr = this.reg.getRegisterDataEmployer();
      console.log(arr);
      this.val = true;
      arr.forEach((item) => {
        if (item.email === this.uemail) {
          item.companyName = formval.value.companyName;
          item.Headoffice = formval.value.companyHeadOffice;
          item.mobile = formval.value.contact;
          item.email = formval.value.email;
          item.state = formval.value.state;
          item.city = formval.value.selectedCity;
        }
      });
      setTimeout(() => { this.val = false }, 1000);
      localStorage.setItem('registerEmployer', JSON.stringify(this.reg.getRegisterDataEmployer()));
    }
  }

}