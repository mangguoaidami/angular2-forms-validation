import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  styles: [`
    
  `],
  template: `
    <h1>-------template dirven--------</h1>
    <template-form></template-form>
    <h1>-------reactive dirven--------</h1>
    <reactive-form></reactive-form>
  `
})
export class AppComponent {}