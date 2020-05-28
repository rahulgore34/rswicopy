import { Injectable } from '@angular/core';
import { registeredJobSeekers } from './shared/registeredUsers';
import { registeredEmployer } from './shared/registeredUsers';
import { from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RegisterdataService {
  newCandidate = registeredJobSeekers;
  newEmployer = registeredEmployer;
  constructor() { }
  setRegisterDataCandidate(obj) {
    this.newCandidate.push(obj);
    localStorage.setItem('registerCandidate', JSON.stringify(this.newCandidate));
  }
  getRegisterDataCandidate() {
    return this.newCandidate;

  }
  setRegisterDataEmployer(obj) {
    this.newEmployer.push(obj);
    localStorage.setItem('registerEmployer', JSON.stringify(this.newEmployer));

  }
  getRegisterDataEmployer() {
    return this.newEmployer;

  }

}
