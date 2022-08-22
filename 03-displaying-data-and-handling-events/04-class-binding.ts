// adding classes to an element based on some condtion
// if we want to add the active class to this button based on the state of the underlying component, we use a variation of property binding, called "class binding". Below, if the isActive field evaluates to true, the btn will receive the class of active. 

import { Component } from '@angular/core';

@Component({
    selector: 'courses',
    template: `
        <button class="btn btn-primary" [class.active]="isActive">Save</button>
    `
})
export class CoursesComponent {
    isActive = true;
}