import { Component, Output, EventEmitter } from '@angular/core';

@Component({
	template : `
		<section class="edit">
			<label for="">New Bug :</label>
			<input type="text" #txtBugName>
			<input type="button" value="Save" (click)="onSaveClick(txtBugName.value)">
		</section>
	`,
	selector : 'bug-edit'
})
export class BugEditComponent{

	@Output()
	onBugAdd : EventEmitter<string> = new EventEmitter<string>();
	
	onSaveClick(bugName:string){
		this.onBugAdd.emit(bugName);
	}
}