import { NgModule } from '@angular/core';
import { FormsModule } 	 from '@angular/forms';
import { CommonModule } from '@angular/common';

import { UtilsModule }	 from '../utils/utils.module';

import { BugTrackerComponent } 		 from './BugTracker.component';
import { BugOperations }			 from './services/BugOperations.service'	
import { BugStorage }				 from './services/BugStorage.service'
import { ClosedCountPipe }			 from './pipes/closedCount';
@NgModule({
  imports:      [ FormsModule, UtilsModule, CommonModule ],
  declarations: [ BugTrackerComponent, ClosedCountPipe],
  providers:	[ BugOperations, BugStorage ],
  exports : 	[ BugTrackerComponent]
})

export class BugTrackerModule{

}