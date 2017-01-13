import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } 	 from '@angular/forms';

import { BugTrackerModule } from './bugTracker/bugTracker.module';

import { AppComponent }  			 from './app.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, BugTrackerModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  providers:	[  ]
})
export class AppModule { }
