import { Component } from '@angular/core';

@Component({
    selector: 'courses',
    template: `
        <h2>{{ title }}</h2>
        <img src="{{ imageUrl }}" />
    `
})
export class CoursesComponent {
    title = "List of courses";
    imageUrl = "http://lorempixel.com/400/200";
}
// interpolation (double curly brackets used to display data)
// interpolation is syntactical sugar. Upon compilation, interpolation is translated into "property binding", where a DOM element is bound to a property or field within our component (src is bound to imgUrl).
// instead of interpolation, property binding would look like: <img [src]="imageUrl" /> 
// this is what Angular translates interpolation to, such that when the imageUrl field changes, the src attribute of the img element is automatically updated. 
// So, between the two, interpolation works well for adding dynamic values between headings, divs, spans, etc, wherever you want to render text (string interpolation). This is because the property binding syntax is more noisy in these circumstances (<h2 [textContent]="title"></h2>). 
// However, property binding in circumstances with attributes is actually shorter, and therefore preferable. 
// Note that property binding works only one way; from the component to the DOM. IE, changing fields within the component will update the DOM. However, changes in the DOM are not reflected in the component, such that an input field will not have inputs change the underlying field or property within the component. Two-way binding comes into play here (comes later)