import {CourseAggregate} from "./Course/Core/Domain/CourseAggregate.mjs";
import {DataTableAdapter as DataTableAdapter} from "./Adapters/DataTable/DataTableAdapter.mjs";

try {
    const dataTable = DataTableAdapter.new()

    const course = CourseAggregate.new();
    course.students(dataTable)
} catch (error) {
    console.error(error);
}