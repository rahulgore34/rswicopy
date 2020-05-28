import { Component, OnInit } from '@angular/core';
import { RegisterdataService } from '../registerdata.service';
@Component({
  selector: 'app-hirenow',
  templateUrl: './hirenow.component.html',
  styleUrls: ['./hirenow.component.scss']
})
export class HirenowComponent implements OnInit {
  candidate;
  quli;
  constructor(private reg: RegisterdataService) { }

  ngOnInit() {
    this.candidate = JSON.parse(localStorage.getItem('registerCandidate'));
    console.log(this.candidate);

  }
  checkquli(e) {
    if (this.quli === '') {
      this.candidate = JSON.parse(localStorage.getItem('registerCandidate'));
    } else if (e.key === "Backspace") {
      console.log('hi');
      this.output();
    }
    this.output();
  }
  output() {
    let temp = JSON.parse(localStorage.getItem('registerCandidate'));
    this.candidate = [];
    console.log(this.quli);
    temp.filter((item) => {
      if (item.details['Qulification'].toUpperCase().startsWith(this.quli.toUpperCase()) === true) {
        this.candidate.push(item);
      }
    });
  }
  logout() {
    localStorage.removeItem('userDetails');
  }

}
