import { Component, Input } from '@angular/core';

@Component({
	template : `
		
		<div>{{data}}</div>
	`,
	selector : 'greeter-message'
})
export  class GreeterMessageComponent{
	
	@Input()
	data : string = '';
}
