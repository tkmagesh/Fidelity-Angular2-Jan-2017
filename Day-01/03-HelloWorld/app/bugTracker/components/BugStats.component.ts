import {Component, Input} from '@angular/core';
import { IBug } from '../models/IBug';

@Component({
	template : `
		<section class="stats">
			<span class="closed">{{data | closedCount}}</span>
			<span> / </span>
			<span>{{data.length}}</span>
		</section>`,
	selector : 'bug-stats'
})
export class BugStatsComponent{
	@Input()
	data : Array<IBug> = [];
}