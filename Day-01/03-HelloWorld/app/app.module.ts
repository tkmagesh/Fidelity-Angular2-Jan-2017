import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } 	 from '@angular/forms';


import { AppComponent }  			 from './app.component';
import { GreeterComponent } 		 from './greeter/greeter.component' ;
import { SalaryCalculatorComponent } from './SalaryCalculator/SalaryCalculator.Component';
import { BugTrackerComponent } 		 from './bugTracker/BugTracker.component';
import { BugOperations }			 from './bugTracker/services/BugOperations.service'	

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, GreeterComponent, SalaryCalculatorComponent, BugTrackerComponent ],
  bootstrap:    [ AppComponent ],
  providers:	[ BugOperations ]
})
export class AppModule { }
