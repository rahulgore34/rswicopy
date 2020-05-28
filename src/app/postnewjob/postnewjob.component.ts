import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import csc from 'country-state-city';
import { NgForm } from '@angular/forms';
import { JobdataService } from '../shared/jobdata.service';
@Component({
  selector: 'app-postnewjob',
  templateUrl: './postnewjob.component.html',
  styleUrls: ['./postnewjob.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PostnewjobComponent implements OnInit {
  isShow = false;
  modalRef: BsModalRef;
  salaryArr = ['10000-15000', '15000-20000', '20000-25000', '25000-30000', '30000-35000', '35000-40000'];
  states = [];
  cities = [];
  city;
  jobs = [];
  val = false;

  constructor(private modalService: BsModalService, private service: JobdataService) { }

  ngOnInit() {
    this.states = csc.getStatesOfCountry('101');
    // console.log(this.states);
  }
  openModal(template) {
    this.modalRef = this.modalService.show(template);
  }
  selected(s) {
    this.city = this.states.filter((item) => {
      return item.name === s;
    });
    // console.log(this.city[0]);

    this.cities = csc.getCitiesOfState(this.city[0].id);
    // console.log(this.cities);

  }

  onSubmit(formval: NgForm) {

    if (formval.valid) {
      // save in service job details array
      console.log(formval.value);
      this.val = true;
      let obj = {
        companyName: formval.value.companyName,
        jobTitle: formval.value.jobTitle,
        salary: formval.value.salary,
        state: formval.value.state,
        city: formval.value.city,
        email: formval.value.email,
        contact: formval.value.contact,
        NoOfOpenings: formval.value.NoOfOpening
      };
      setTimeout(() => { this.val = false }, 1000);
      this.service.setJobDetails(obj);
      formval.reset();
      this.service.getJobDetails();
      localStorage.removeItem('postjob');
      localStorage.setItem('postjob', JSON.stringify(this.service.getJobDetails()));
    }
  }
  logout() {
    localStorage.removeItem('userDetails');
  }
}
