import { Component } from '@angular/core';

@Component({
  selector: 'no-content',
  styles: [`
  div {
    margin: 20px auto;
    width: 1100px;
   }
`],
  template: `
    <div>
      <h1>Not Found</h1>
    </div>
  `
})
export class NoContent {

}
