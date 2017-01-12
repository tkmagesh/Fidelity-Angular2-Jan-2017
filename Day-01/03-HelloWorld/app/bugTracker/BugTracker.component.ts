import { Component } from '@angular/core';
import { IBug } from './models/IBug';
import { BugOperations } from './services/BugOperations.service';

@Component({
	selector : 'bug-tracker',
	template : `
		<h1>Bug Tracker</h1>
			<hr>
			<section class="content">
				<section class="stats">
					<span class="closed">{{getClosedCount()}}</span>
					<span> / </span>
					<span>{{bugs.length}}</span>
				</section>
				<section class="sort">
					<label for="">Order By :</label>
					<input type="text" name="" id="">
					<label for="">Descending ? :</label>
					<input type="checkbox" name="" id="">
				</section>
				<section class="edit">
					<label for="">New Bug :</label>
					<input type="text" #txtBugName>
					<input type="button" value="Save" (click)="onSaveClick(txtBugName.value)">
				</section>
				<section class="list">
					<ol>
						<li *ngFor="let bug of bugs">
							<span class="bugname" (click)="toggle(bug)" [ngClass]="{closed : bug.isClosed}">
								{{bug.name}}
							</span>
							<div class="datetime">[Created At]</div>
						</li>
						
					</ol>
					<input type="button" value="Remove Closed" (click)="onRemoveClosedClick()">
				</section>
			</section>

	`
})
export class BugTrackerComponent{
	bugs : Array<IBug> = [];
	
	constructor(private bugOperations : BugOperations){
		
	}

	onSaveClick(bugName:string){
		let newBug = this.bugOperations.createNew(bugName);
		this.bugs.push(newBug);
	}

	toggle(bug : IBug){
		this.bugOperations.toggle(bug);
	}

	onRemoveClosedClick(){
		for(let i=this.bugs.length -1 ; i >=0; i--)
			if (this.bugs[i].isClosed)
				this.bugs.splice(i,1);
	}

	getClosedCount(){
		let closedCount = 0;
		for(let i =0; i < this.bugs.length; i++)
			if (this.bugs[i].isClosed)
				++closedCount;
		return closedCount;
	}
}









