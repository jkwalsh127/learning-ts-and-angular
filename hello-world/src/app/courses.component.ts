
import { Component } from '@angular/core'; // import the component decorator

// The following is a "decorator function". It takes an obj as an arg, which is passed one or more props to tell Angular how the component works
@Component({
    selector: 'courses', // in css, if we want to reference the <courses> element, we use the selector "courses". To reference <div class="courses">, the selector is ".courses". If there is an id, replace . with #
    template: '<h2>{{ title }}</h2>', //the html markup we want to be rendered for this component. Note that these can also be empty lines of code, which is covered late
    // Adding the curly braces will have the expression evaluated at run time, and the value will be placed within the DOM. This ensures that updates to the title field will automatically be updated in the DOM (a concept called "data binding", because the view is bound to the field within this component, such that whenever the value of the field changes, the view is automatically notified and updated)
    //any JS expressions can be used within this template. Ex: "{{ "Title: " + title }}", or a method, like, "{{ getTitle() }}". (Using the method is called "strained Interpolation")
}) 
export class CoursesComponent {
    title = "List of courses";

    getTitle() {
        return this.title;
    }
}

// so, wherever there is an element 'courses', angular is going to render the template inside that element. These elements are added to the ....component.html files