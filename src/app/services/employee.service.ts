import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/map';

import { Employee } from '../models/employee';

import { environment } from '../../environments/environment';

@Injectable()
export class EmployeeService {
  private options: any;

  constructor(private http: Http) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    this.options = new RequestOptions({ headers: headers });
  }

  post(employee: Employee) {
    return this.http
      .post(environment.serviceUrl + 'v1/Employee', employee, this.options)
      .map((res: Response) => res.json());
  }
}
