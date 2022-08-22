// another variation of property  binding, that is similar to class binding.
// below we add in-line styles based on some condition. 
// any "DOM style object property" (the object called style) can be attached to an expression

import { Component } from '@angular/core';

@Component({
    selector: 'courses',
    template: `
        <button [style.backgroundColor]="isActive ? 'blue' : 'white'">Save</button>
    `
})
export class CoursesComponent {
    isActive = true;
}