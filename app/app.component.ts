/*
Defines the the AppComponent used in app.module.ts
*/

// import component function from angular core lib
import { Component } from '@angular/core';

// define person class (should be moved to separate file)
export class Person {
  name: string;
  favoriteColor: string;
}

// define component properties
@Component({

  // CSS selector that tells Angular to create and insert an instance of this component where it finds a <my-app> tag in parent HTML.
  selector: 'my-app',

  // Sets the HTML-ish view for the component.
  template: `
    <h1>{{title}}</h1>
    <h2>What is your name?</h2>
    <div>
      <input [(ngModel)]="person.name" placeholder="name">
    </div>
    <h2>Nice to meet you, {{person.name}}!</h2>`,
})

// export the component with name set
export class AppComponent {
  title = 'Caleb\'s Amazing AngularJS Demo';
  person: Person = {
    name: 'Bob',
    favoriteColor: 'Green',
  };
}
