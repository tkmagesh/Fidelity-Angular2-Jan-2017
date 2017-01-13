import { Component } from '@angular/core';
import { IBug } from './models/IBug';
import { BugStorage } from './services/BugStorage.service';

@Component({
	selector : 'bug-tracker',
	template : `
		<h1>Bug Tracker</h1>
			<hr>
			<section class="content">
				<bug-stats [data]="bugStorage.bugs"></bug-stats>
				<section class="sort">
					<label for="">Order By :</label>
					<input type="text" [(ngModel)]="sortBy">
					<label for="">Descending ? :</label>
					<input type="checkbox" [(ngModel)]="sortDescending">
				</section>
				

				<bug-edit (onBugAdd)="onNewBugAddEvent($event)"></bug-edit>
				

				<section class="list">
					<ol>
						<bug-item 
							*ngFor="let bug of bugStorage.bugs | sort:sortBy:sortDescending" 
							[data]="bug" 
							(onBugToggle)="toggle($event)">
						</bug-item>
						
					</ol>
					<input type="button" value="Remove Closed" (click)="onRemoveClosedClick()">
				</section>
			</section>

	`
})
export class BugTrackerComponent{
	
	
	constructor(private bugStorage : BugStorage){
		
	}

	onNewBugAddEvent(bugName : string){
		this.bugStorage.addNew(bugName);
	}
	

	toggle(bug : IBug){
		this.bugStorage.toggle(bug);
	}

	onRemoveClosedClick(){
		this.bugStorage.removeClosed();
	}

}









