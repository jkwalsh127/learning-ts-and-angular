
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
    `,
}) 
export class CoursesComponent {
    title = "List of courses";
    // courses = ["course1", "course2", "course3"]; 

    // two options:
    // 1: add the logic for calling the http service within the component. However, this will tightly couple this component to the http endpoint, which could make unit testing difficult as it would need to be connected to the endpoint. Another issue is that there may be other places within the app that you want to render the list, which means the logic for consuming the http service would have to be duplicated in another component. The third issue is that a component should not include any logic other than the presentation logic
    // 2: use a "service" class (refer to courses.service.ts)

    getTitle() {
        return this.title;
    }
}