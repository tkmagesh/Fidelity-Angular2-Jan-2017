import { NgModule } from '@angular/core';
import { FormsModule } 	 from '@angular/forms';
import { CommonModule } from '@angular/common';

import { UtilsModule }	 from '../utils/utils.module';

import { BugTrackerComponent } 		 from './BugTracker.component';
import { BugOperations }			 from './services/BugOperations.service'	

@NgModule({
  imports:      [ FormsModule, UtilsModule, CommonModule ],
  declarations: [ BugTrackerComponent],
  providers:	[ BugOperations ],
  exports : 	[ BugTrackerComponent]
})

export class BugTrackerModule{

}