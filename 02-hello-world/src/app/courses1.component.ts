
import { Component } from '@angular/core'; 


@Component({
    selector: 'courses',
    template: `
        <h2>{{ title }}</h2>
        <ul>
            <li *ngFor="let course of courses">
                {{ course }}
            </li>
        </ul>
    `, // to repeat the li element for each course, we are using the angular building block known as a "directive", which are used to manipulate the DOM, by adding a new DOM element, removing a DOM element, change the class or style of a DOM element, etc...
    //The * is used whenever you are using a directive that modifies the structure of the DOM
    //the let keyword is defining a variable, while of is a special keyword, and courses is the field of this class that we are iterating over
}) 
export class CoursesComponent {
    title = "List of courses";
    courses = ["course1", "course2", "course3"]; // in the real world, you would want objects here instead of strings

    getTitle() {
        return this.title;
    }
}