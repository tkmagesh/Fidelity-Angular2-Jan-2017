import { Component, OnInit } from '@angular/core';
import { IBug } from './models/IBug';
import { BugServer } from './services/BugServer.service';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';

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
							*ngFor="let bug of (bugServer.bugs | async | sort:sortBy:sortDescending)" 
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
	
	

	
	bugs : any = null;
	
	constructor(private bugServer : BugServer, private http : Http){
		this.bugs = this.http
			.get('http://localhost:3333/bugs')
			.map(response => response.json())
	}

	onNewBugAddEvent(bugName : string){
		this.bugServer.addNew(bugName);
	}
	

	toggle(bug : IBug){
		this.bugServer.toggle(bug);
	}

	onRemoveClosedClick(){
		this.bugServer.removeClosed();
	}

}









