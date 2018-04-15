import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { EmployeeService } from './services/employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [EmployeeService]
})
export class AppComponent implements OnInit {
  title = 'Projeto ESX!';
  form: FormGroup;
  errors: any[];
  success = false;
  name = '';
  grossSalary = '';
  tax = '';
  netSalary = '';

  constructor(private employeeService: EmployeeService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loadForm();
  }

  loadForm() {
    this.errors = [];
    this.success = false;
    this.name = '';
    this.grossSalary = '';
    this.tax = '';
    this.netSalary = '';

    this.form = this.formBuilder.group({
      name: ['', Validators.compose([
        Validators.required
      ])],
      address: ['', Validators.compose([
        Validators.required
      ])],
      grossSalary: [0, Validators.compose([
        Validators.required
      ])]
    });
  }

  reset() {
    this.loadForm();
  }

  save() {
    this.employeeService
      .post(this.form.value)
      .subscribe(result => {
        this.success = result.success;
        alert(result.message);
        if (result.success == true) {
          this.name = result.data.name;
          this.grossSalary = result.data.grossSalary;
          this.tax = result.data.tax;
          this.netSalary = result.data.netSalary;
        } else {
          this.errors = result.data;
        }
      }, error => {
        this.errors = JSON.parse(error._body).errors;
      });
  }
}
