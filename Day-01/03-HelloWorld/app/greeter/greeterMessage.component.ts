import { Component, Input } from '@angular/core';

@Component({
	template : `
		
		<div id="divMessage">{{data}}</div>
	`,
	selector : 'greeter-message'
})
export  class GreeterMessageComponent{
	
	@Input()
	data : string = '';
}
