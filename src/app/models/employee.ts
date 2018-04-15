export class Employee {

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }

    name: string = '';
    address: string = '';
    grossSalary: number = 0;
    
}
