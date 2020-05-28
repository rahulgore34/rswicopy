interface IRegisterJobSeeker {
  id?: number;
  firstName: string;
  lastName: string;
  mobile: string;
  email: string;
  city: string;
  state: string;
  password: string;
  details: object;
}
export const registeredJobSeekers: IRegisterJobSeeker[] = [
  {
    id: 1,
    firstName: 'Admin',
    lastName: 'Admin',
    mobile: '9960176754',
    email: 'rahulgore34@gmail.com',
    city: 'Pune',
    state: 'Maharashtra',
    password: '0123456789',
    details: { Qulification: 'bcs', experience: '4', resume: '', jobcategories: 'it' }
  }
];
interface IRegisterEmployer {
  id?: number;
  companyName: string;
  Headoffice: string;
  mobile: string;
  email: string;
  state: string;
  city: string;
  password: string;
}
export const registeredEmployer: IRegisterEmployer[] = [
  {
    id: 1,
    companyName: 'Admin',
    Headoffice: 'Admin',
    mobile: '9960176754',
    email: 'saritadiwate21@gmail.com',
    state: 'Maharashtra',
    city: 'Pune',
    password: '123456789'
  }
];
