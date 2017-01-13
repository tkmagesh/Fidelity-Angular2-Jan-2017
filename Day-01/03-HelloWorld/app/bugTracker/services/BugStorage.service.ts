import {Injectable} from '@angular/core';
import {IBug}		from '../models/IBug';
import {BugOperations} from './BugOperations.service';


@Injectable()
export class BugStorage{
	storage : any = window.localStorage;
	currentBugId : number = 0;
	bugs : Array<IBug> = [];

	constructor(private bugOperations : BugOperations){
		let result : Array<IBug> = [];
		for(let i =0; i < this.storage.length; i++){
			let bug : IBug = JSON.parse(this.storage.getItem(this.storage.key(i)));
			this.currentBugId = this.currentBugId > bug.id ? this.currentBugId : bug.id;
			result.push(bug);
		}
		this.bugs = result;
	}

	

	addNew(bugName : string) : IBug{
		var newBug = this.bugOperations.createNew(++this.currentBugId, bugName);
		this.storage.setItem(newBug.id.toString(), JSON.stringify(newBug));
		this.bugs = this.bugs.concat([newBug]);
		return newBug;
	}

	toggle(bug : IBug){
		this.bugs = this.bugs.map(bugInList => {
			if (bug === bugInList){
				 
				let toggledBug : IBug = this.bugOperations.toggle(bug);
				this.storage.setItem(toggledBug.id.toString(), JSON.stringify(toggledBug));
				return toggledBug;
			}
			return bugInList;
		});

	}

	removeClosed(){
		for(let i=this.bugs.length -1 ; i >=0; i--){
			//let bug : IBug = this.bugs[i];
			if (this.bugs[i].isClosed){
				this.storage.removeItem(this.bugs[i].id.toString());
				this.bugs.splice(i,1);
			}
		}
	}

}