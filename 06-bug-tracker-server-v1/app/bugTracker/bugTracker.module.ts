import { NgModule } from '@angular/core';
import { FormsModule } 	 from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { UtilsModule }	 from '../utils/utils.module';

import { BugTrackerComponent } 		 from './BugTracker.component';
import { BugOperations }			 from './services/BugOperations.service'	
import { BugStorage }				 from './services/BugStorage.service'
import { ClosedCountPipe }			 from './pipes/closedCount';
import { BugStatsComponent }		 from './components/BugStats.component';
import { BugEditComponent }			 from './components/BugEdit.component';
import { BugItemComponent }			 from './components/BugItem.component';
import { BugServer }				 from './services/BugServer.service';


@NgModule({
  imports:      [ FormsModule, UtilsModule, CommonModule, HttpModule ],
  declarations: [ BugTrackerComponent, ClosedCountPipe, BugStatsComponent, BugEditComponent, BugItemComponent],
  providers:	[ BugOperations, BugStorage, BugServer ],
  exports : 	[ BugTrackerComponent]
})

export class BugTrackerModule{

}