import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  	<h1>Angular</h1>
  	<greeter></greeter>
  `,
})
export class AppComponent  { name = 'Angular'; }
