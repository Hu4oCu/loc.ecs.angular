import { Component, ViewEncapsulation } from '@angular/core';

import { AppState } from './app.service';

import { Header } from "./ui/header.component";
import { Footer } from "./ui/footer-component"

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  directives: [
    Header,
    Footer
  ],
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.style.css'
  ],
  template: `
    <header-component></header-component>

    <main>
      <div id="main">
        <router-outlet></router-outlet>
      </div>
    </main>

    <footer-component></footer-component>
  `
})
export class App {
  name = 'Angular 2 Webpack Starter';

  constructor(
    public appState: AppState) {

  }

  ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }

}

/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
