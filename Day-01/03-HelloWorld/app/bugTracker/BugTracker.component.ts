import { Component } from '@angular/core';
import { IBug } from './models/IBug';
import { BugStorage } from './services/BugStorage.service';

@Component({
	selector : 'bug-tracker',
	template : `
		<h1>Bug Tracker</h1>
			<hr>
			<section class="content">
				<section class="stats">
					<span class="closed">{{bugStorage.bugs | closedCount}}</span>
					<span> / </span>
					<span>{{bugStorage.bugs.length}}</span>
				</section>
				<section class="sort">
					<label for="">Order By :</label>
					<input type="text" [(ngModel)]="sortBy">
					<label for="">Descending ? :</label>
					<input type="checkbox" [(ngModel)]="sortDescending">
				</section>
				<section class="edit">
					<label for="">New Bug :</label>
					<input type="text" #txtBugName>
					<input type="button" value="Save" (click)="onSaveClick(txtBugName.value)">
				</section>
				<section class="list">
					<ol>
						<li *ngFor="let bug of bugStorage.bugs | sort:sortBy:sortDescending">
							<span class="bugname" (click)="toggle(bug)" [ngClass]="{closed : bug.isClosed}">
								{{bug.name | trimText:40}}
							</span>
							<div class="datetime">{{bug.createdAt | elapsed}}</div>
						</li>
						
					</ol>
					<input type="button" value="Remove Closed" (click)="onRemoveClosedClick()">
				</section>
			</section>

	`
})
export class BugTrackerComponent{
	
	
	constructor(private bugStorage : BugStorage){
		
	}

	onSaveClick(bugName:string){
		this.bugStorage.addNew(bugName);
	}

	toggle(bug : IBug){
		this.bugStorage.toggle(bug);
	}

	onRemoveClosedClick(){
		this.bugStorage.removeClosed();
	}

}









