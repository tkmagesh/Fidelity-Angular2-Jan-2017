function add(x:number|string, y:number) : number{
	return +x + y;
}

console.log(add(100,200));
console.log(add("100", 20));

class Employee{
	

	constructor(private id:number, private name:string, private salary:number){
		
	}

	display(){
		console.log(`${this.id}, ${this.name}, ${this.salary}`);
	}
}

class FullTimeEmployee extends Employee{
	constructor( id:number, name:string, salary:number, public benefits : string){
		super(id, name, salary);

	}
}

var emp : FullTimeEmployee = new FullTimeEmployee(100, 'Magesgh', 10000, "Good Food!");
emp.display();
console.log(emp.benefits)