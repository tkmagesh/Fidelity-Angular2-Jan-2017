var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
function add(x, y) {
    return +x + y;
}
console.log(add(100, 200));
console.log(add("100", 20));
var Employee = (function () {
    function Employee(id, name, salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
    Employee.prototype.display = function () {
        console.log(this.id + ", " + this.name + ", " + this.salary);
    };
    return Employee;
}());
var FullTimeEmployee = (function (_super) {
    __extends(FullTimeEmployee, _super);
    function FullTimeEmployee(id, name, salary, benefits) {
        _super.call(this, id, name, salary);
        this.benefits = benefits;
    }
    return FullTimeEmployee;
}(Employee));
var emp = new FullTimeEmployee(100, 'Magesgh', 10000, "Good Food!");
emp.display();
console.log(emp.benefits);
