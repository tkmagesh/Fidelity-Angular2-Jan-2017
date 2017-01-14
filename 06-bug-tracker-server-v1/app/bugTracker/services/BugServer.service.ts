import { Injectable } from '@angular/core';
import { BugOperations } from './BugOperations.service';
import { IBug } from '../models/IBug';

declare var fetch : any;

@Injectable()
export class BugServer{
	
	bugs : Promise<Array<IBug>> = null;

	//private bugData : Array<IBug> = null;

	constructor(private bugOperations : BugOperations){
		/*fetch('http://localhost:3333/bugs')
			.then((response : any) => response.json())
			.then((bugs : any) => {
				this.bugData = bugs;
				this.bugs = Promise.resolve(this.bugData);
			})*/
		this.loadData();
	}

	private loadData(){
		this.bugs = fetch('http://localhost:3333/bugs')
			.then((response:any) => response.json());

	}

	addNew(bugName : string){
		/*fetch('http://localhost:3333/bugs', {
			method : 'POST',
			body : JSON.stringify(this.bugOperations.createNew(0, bugName)),
			headers : {
				'content-type' : 'application/json'
			}
		})
		.then((response : any) => response.json())
		.then((newBug : IBug) => {
			this.bugData.push(newBug);
			this.bugs = Promise.resolve(this.bugData);
		})*/
		fetch('http://localhost:3333/bugs', {
			method : 'POST',
			body : JSON.stringify(this.bugOperations.createNew(0, bugName)),
			headers : {
				'content-type' : 'application/json'
			}
		})
		.then((response : any) => this.loadData());
	}

	toggle(bug : IBug){

		fetch(`http://localhost:3333/bugs/${bug.id}`, {
			method : 'PUT',
			body : JSON.stringify(this.bugOperations.toggle(bug)),
			headers : {
				'content-type' : 'application/json'
			}
		})
		.then((response : any) => this.loadData());	
	}

	removeClosed(){
		/*var promises : any[]= [];
		this.bugs.then((bugs) => {
			var bugToBeRemoved = bugs.filter(bug => bug.isClosed);
			bugToBeRemoved.forEach(bug => {
				var promise = fetch(`http://localhost:3333/bugs/${bug.id}`, {
					method : 'DELETE'
				})
				promises.push(promise);
			});
			Promise
				.all(promises)
				.then(() => this.loadData())

		})*/

		this.bugs
			.then((bugs : IBug[]) => bugs.filter(bug => bug.isClosed))
			.then((closedBugs : IBug[]) =>
					closedBugs.map(closedBug => 
						fetch(`http://localhost:3333/bugs/${closedBug.id}`, {
							method : 'DELETE'
						})
					)
			)
			.then((promises : any) => Promise.all(promises))
			.then(() => this.loadData());
	}
}