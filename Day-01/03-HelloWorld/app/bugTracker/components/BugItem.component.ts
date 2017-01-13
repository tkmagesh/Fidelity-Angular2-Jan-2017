import { Component, Input, Output, EventEmitter } from '@angular/core';

import { IBug } from '../models/IBug';

@Component({
	template : `
	<li>
		<span class="bugname" (click)="toggle(data)" [ngClass]="{closed : data.isClosed}">
			{{data.name | trimText:40}}
		</span>
		<div class="datetime">{{data.createdAt | elapsed}}</div>
	</li>`,
	selector : 'bug-item'
})
export class BugItemComponent{
	@Input()
	data : IBug ;

	@Output()
	onBugToggle : EventEmitter<IBug> = new EventEmitter<IBug>();

	toggle(bug : IBug){
		this.onBugToggle.emit(bug);
	}
}