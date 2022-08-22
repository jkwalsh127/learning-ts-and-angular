import { Component } from '@angular/core';

@Component({
    selector: 'courses',
    template: `
        <img [src]="imageUrl" />
        <table>
            <tr>
                <td [colspan]="colSpan"></td>
            </tr>
        </table>
    `
})
export class CoursesComponent {
    imageUrl = "http://lorempixel.com/400/200";
    colSpan = 2;
}

// the above produces an error, "cannot bind 'colspan' since it isnt a known property of 'td'"
// to understand the error, we must know the difference between DOM 9document object model) and HTML:
// DOM is a model of objects that represent the structure of a document (html < head/body < (title, script)/(paragraph) < etc. ).
// essentially of tree of objects in memory. HTML is a markup language that is used to represent DOM in text. A browser will parse HTML and build the DOM tree. 
// Vanilla JS can also construct the DOM tree programatically. 
// The key is that most attributes of HTML elements have a 1:1 mapping to properties of DOM objects. There are a few exceptions that do not have DOM representations, however. Above, "colspan" is an expamle of that.
// Further, in the previous example where we bound [textContent] to the h1, this is a property of a DOM object but not an HTML attribute. Nonetheless, it works because property binding is about assigning DOM props, not html attributes. 
// Still, in most cases, HTML attributes and DOM object properties have a 1:1 mapping, but the exceptions exist. 
// If we want to bind the attribute of the td element in the above example, we need a slightly different syntax: 
//<td [attr.colspan]="colSpan"></td>
// This lets angular know that we are targeting the colspan attribute of an HTML element (td)