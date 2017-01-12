import { Component } from '@angular/core';

@Component({
	template : `
		<h3>Greeter</h3>
		<label> Name : </label>
		<input type="text" [(ngModel)]="name">
		<input type="button" value="Greet" (click)="onGreetClick()" >
		<div>{{message}}</div>
	`,
	selector : 'greeter'
})
export  class GreeterComponent{
	message : string = 'Dummy message';

	name : string = '';

	onGreetClick(){
		this.message = `Hi ${this.name}, Have a nice day!`;
		this.name = '';
	}
}
