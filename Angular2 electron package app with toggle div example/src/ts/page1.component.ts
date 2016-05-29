import {Component} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {Panel} from './panel';

@Component({
  selector: 'users-home',
  template: `<h1>Page1 Component Loaded</h1>
  <panel></panel>
  `,
  directives: [Panel]
})
export class Page1Component {
  constructor(params: RouteParams) {
     
  }
}
