import { CoursesService } from './courses.service';
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
    courses; 

    // constructor() {
    //     let service = new CoursesService();
    //     this.courses = service.getCourses();
    // }
    // problems with the above implementation: using the "new" operator tightly couples the component to the service. The other is that if we decide to add a parameter to the constructor, we have to add a new arg to the "CoursesService()" and anywhere else in the app where it is used, making this very fragile.
    // instead of recreating an instance of the CoursesService, we can ask Angular to do that. 
    constructor(service: CoursesService) {
        this.courses = service.getCourses();
    }
    // Now, whenever angular creates an instance of this component, it looks at the constructor and sees that it has a dependency. So, first it creates an instance of the CoursesService, and then passes it to the constructor. This way, changes to the CoursesService does not have to modified in many places. Another benefit is that, when unit testing, an actual CoursesService isn't supplied to the constructor, as a fake one can be used that doesnt consume the http service on the backend (the courses component is effectively decoupled from the courses service)
    // to inject the dependency (dependency injection: provide the dependencies of a class to its constructor), the dependencies must be registered somewhere in the module. Check app.module.ts where dependencies for each component in the module are listed in the "providers" array. Note that registering a dependency as a provider within a module will have angular create a single instance of that class for the entire module. So, if there were 100 components in the module and 50 need the same dependency, there is only one instance of that dependency in memory that will be passed to each component (known as the "singleton" pattern)
    // to recap, we provided CoursesService as a parameter in the constructor makes it a dependency of this class, registered it as a provider of the app module, which will have angular instantiate the dependencies and then inject those dependencies into the constructor of the class whenever an instance of this component
}