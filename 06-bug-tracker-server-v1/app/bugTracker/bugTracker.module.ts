import { NgModule } from '@angular/core';
import { FormsModule } 	 from '@angular/forms';
import { CommonModule } from '@angular/common';

import { UtilsModule }	 from '../utils/utils.module';

import { BugTrackerComponent } 		 from './BugTracker.component';
import { BugOperations }			 from './services/BugOperations.service'	
import { BugStorage }				 from './services/BugStorage.service'
import { ClosedCountPipe }			 from './pipes/closedCount';
import { BugStatsComponent }		 from './components/BugStats.component';
import { BugEditComponent }			 from './components/BugEdit.component';
import { BugItemComponent }			 from './components/BugItem.component';

@NgModule({
  imports:      [ FormsModule, UtilsModule, CommonModule ],
  declarations: [ BugTrackerComponent, ClosedCountPipe, BugStatsComponent, BugEditComponent, BugItemComponent],
  providers:	[ BugOperations, BugStorage ],
  exports : 	[ BugTrackerComponent]
})

export class BugTrackerModule{

}