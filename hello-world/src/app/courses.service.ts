
//we usually decorate classes with the component decorator, but there is no decoartor for services, so services are essentially a plain TS class
export class CoursesService {
    getCourses() {
        // here would go the logic. For now we return hard code
        return ["course1", "course2", "course3"];
    }
}