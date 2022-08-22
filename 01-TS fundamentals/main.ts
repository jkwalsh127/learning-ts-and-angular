
import { LikeComponent } from "./like.component";

let component = new LikeComponent(10, true);
component.onClick();
// template string can be used to display the value of a field
console.log(`likesCount: ${component.likesCount}, isSelected: ${component.isSelected}`)

// a current problem is that the number of likes can change by simply writing: component.likesCount = 2;
// same is true for component.isSelected
// again, the values of these fields should only be controlled when clicking the like button
// therefore, we need a read-only property so that the consumer of the class can not change the value of the two fields, outsside the on click method (see like.component for update)

