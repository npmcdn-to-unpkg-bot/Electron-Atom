import {Component, Output, EventEmitter} from 'angular2/core';

@Component({
  selector: 'panel',
  styles: [`
    .hide {
      display: none;
    },
    `
  ],
  template: `
  <div class="card">
        <div class="card-block" [ngClass]="{hide: opened}">
            <input type="button" value="click" (click)="toggle()">
            <div>list of users from first div/component</div>
        </div>
    
    <div class="card-block" [ngClass]="{hide: !opened}">
        <div>registration form from second div/component</div>
        <div> 
          <input type="button" value="click" (click)="toggle()" [ngClass]="{hide: !opened}">
        </div>
    </div>
  </div>`
})

export class Panel {
    opened: Boolean = false;
    toggle () {
      
      this.opened = !this.opened;
    }
  }