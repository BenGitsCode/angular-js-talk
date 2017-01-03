# AngularJS

This is an introduction of AngularJS 2x as prepared for the General Assembly
conference exercise.

## Prerequisites
-   JavaScript
-   jQuery
-   Handlebars

## Objectives
By the end of this, developers should be able to:
-   Explain how AngularJS at a high-level.
-   Explain the benefits of using AngularJS.
-   Have a foundation to get started on AngularJS development.

## Instructions
-   Fork and clone this repository.
-   Create a new branch, named `training`.
-   Checkout the `training` branch.
-   Install dependencies by running `npm install`
-   Enter 'npm start' in terminal.
-   Open localhost using specified port from terminal.

## What is AngularJS?
-   Angular is a framework for building client applications in HTML and JavaScript or TypeScript.

![picture alt](https://angular.io/resources/images/devguide/architecture/overview2.png)

## Why should I use AngularJS?
-   Provide structure (and less code) to JavaScript.
-   Provides templating (like handlebars).
-   Two-Way Data-Binding.
-   Provide plumbing for SPA.
-   Modular development.

## The Building Blocks
-   There are eight major building blocks of Angular.
-   Modules, Components, Templates, Metadata, Data Binding, Directives, Services, and Dependency Injection.

### Modules
-   Angular apps are modular and break down their code into modules.
-   All apps have at least one module known as the root module - and may have additional __feature modules__ depending on the app.

```js
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }  from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

### Components
-   A component controls a patch of screen called a view.

```js
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <h2>What is your name?</h2>
    <div>
      <input [(ngModel)]="person.name" placeholder="name">
    </div>
    <h2>Nice to meet you, {{person.name}}!</h2>`,
})

export class AppComponent {
  title = 'Caleb\'s Amazing AngularJS Demo';
  person: Person = {
    name: 'Bob',
    favoriteColor: 'Green',
  };
}
```

### Templates
-   The template is defined alongside it's corresponding component.
-   Looks like HTML but let's you use code like handlebars.

```HTML
<h1>{{title}}</h1>
<h2>What is your name?</h2>
<div>
  <input [(ngModel)]="person.name" placeholder="name">
</div>
<h2>Nice to meet you, {{person.name}}!</h2>
```

### Metadata
-   Tells Angular how to process a class.

```js
selector: 'my-app',
template: `
  <h1>{{title}}</h1>
  <h2>What is your name?</h2>
  <div>
    <input [(ngModel)]="person.name" placeholder="name">
  </div>
  <h2>Nice to meet you, {{person.name}}!</h2>`,
```

### Data Binding
-   Allows you to coordinate the components and templates.
-   This includes two-way binding - changes from the model update the view and the view updates the model. The default name is populated with the the name property of our person instance. When you enter a new name, the updated value flows back to the component and resets the property to the latest value.

```HTML
<h1>{{title}}</h1>
<h2>What is your name?</h2>
<div>
  <input [(ngModel)]="person.name" placeholder="name">
</div>
<h2>Nice to meet you, {{person.name}}!</h2>
```
### Directives
-   Angular templates are dynamic - the DOM is transformed based on instructions given by directives.
-   There are two types: Structural and Attribute.

#### Structural Directives
-   Alter layout by adding, removing, and replacing elements in DOM.
```js
<li *ngFor="let hero of heroes"></li>
<hero-detail *ngIf="selectedHero"></hero-detail>
```

#### Attribute Directives
-   Alter the appearance or behavior of an existing element. In templates they look like regular HTML attributes, hence the name.
```js
<input [(ngModel)]="person.name">
```
### Services
-   Service is a broad category encompassing any value, function, or feature that your application needs.
-   An example would be a logging service.

### Dependency Injection
-   Dependency Injection is a software design pattern in which an object is given its dependencies, rather than the object creating them itself. It is about removing the hard-coded dependencies and making it possible to change them whenever needed.

## Demo: Hello World

Let's see this in action.

## Additional Resources
-   [AngularJS](https://angularjs.org/)
-   [AngularJS Docs](https://angular.io/docs/ts/latest/)
-   [What-is-the-difference-between-AngularJs-and-Angular-2](https://www.quora.com/What-is-the-difference-between-AngularJs-and-Angular-2)
-   [Advantages of AngularJS over JQuery](https://www.quora.com/What-are-the-advantages-of-using-AngularJS-over-JQuery)
-   [Why you should not use AngularJS](https://medium.com/@mnemon1ck/why-you-should-not-use-angularjs-1df5ddf6fc99#.6yhwxxndw)

## [License](LICENSE)
1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
