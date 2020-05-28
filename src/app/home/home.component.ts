import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { JobdataService } from '../shared/jobdata.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  job = [];
  constructor(private service: JobdataService, private router: Router) { }

  ngOnInit() {
  }
  getJob() {
    this.router.navigate(['/login']);


  }
}
