import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } 	 from '@angular/forms';

import { BugTrackerModule } from './bugTracker/bugTracker.module';

import { AppComponent }  			 from './app.component';
import { GreeterComponent } 		 from './greeter/greeter.component' ;
import { GreeterMessageComponent } 		 from './greeter/greeterMessage.component' ;
import { SalaryCalculatorComponent } from './SalaryCalculator/SalaryCalculator.Component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, BugTrackerModule ],
  declarations: [ AppComponent, GreeterComponent, SalaryCalculatorComponent, GreeterMessageComponent],
  bootstrap:    [ AppComponent ],
  providers:	[  ]
})
export class AppModule { }
