import { Component } from '@angular/core';





@Component({
  selector: 'my-app',
  template: `
  	<h1>Angular App</h1>
  	<hr>
  	<greeter></greeter>
  `,
})
export class AppComponent  { name = 'Angular'; }
