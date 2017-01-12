import { Component } from '@angular/core';
import { SalaryCalculator } from './SalaryCalculator.Model';




@Component({
  selector: 'salary-calculator',
  template: `
  	<section class="content">
		<div class="field">
			<label for="">Basic :</label>
			<input type="number" [(ngModel)]="calculator.basic">
		</div>
		<div class="field">
			<label for="">HRA :</label>
			<input type="number" [(ngModel)]="calculator.hra">
		</div>
		<div class="field">
			<label for="">DA :</label>
			<input type="number" [(ngModel)]="calculator.da">
		</div>
		<div class="field">
			<label for="">Tax :</label>
			<input type="range" [(ngModel)]="calculator.tax" id="rangeTax" min="0" max="30" >
			<span id="spanTax">{{calculator.tax}}</span>
		</div>
		<div class="field">
			<input type="button" value="Calculate" (click)="calculator.calculate()">
		</div>
		<div class="field">
			<div id="divSalary">{{calculator.salary}}</div>
		</div>
	</section>
  `,
})
export class SalaryCalculatorComponent  { 
	calculator : SalaryCalculator = new SalaryCalculator();
}





