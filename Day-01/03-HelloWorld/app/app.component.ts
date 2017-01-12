import { Component } from '@angular/core';





@Component({
  selector: 'my-app',
  template: `
  	<h1>Angular App</h1>
  	<hr>
  	<salary-calculator></salary-calculator>
  `,
})
export class AppComponent  { name = 'Angular'; }
