import { Component, OnInit } from '@angular/core';
import { IBug } from './models/IBug';
import { BugStorage } from './services/BugStorage.service';

declare var fetch:any;

@Component({
	selector : 'bug-tracker',
	template : `
		<h1>Bug Tracker</h1>
			<hr>
			<section class="content">
				<bug-stats [data]="bugs | async"></bug-stats>
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
							*ngFor="let bug of (bugs | async | sort:sortBy:sortDescending)" 
							[data]="bug" 
							(onBugToggle)="toggle($event)">
						</bug-item>
						
					</ol>
					<input type="button" value="Remove Closed" (click)="onRemoveClosedClick()">
				</section>
			</section>

	`
})
export class BugTrackerComponent implements OnInit{
	
	bugs : Promise<Array<IBug>> = null;

	ngOnInit(){
		this.bugs = fetch('http://localhost:3333/bugs')
						.then((response : any) => response.json())
			
	}
	
	constructor(){
		
	}

	onNewBugAddEvent(bugName : string){
		
	}
	

	toggle(bug : IBug){
		
	}

	onRemoveClosedClick(){
		
	}

}









