import {Service} from "../Course/Core/Ports/Service.mjs";
import {DataTableAdapter} from "./DataTable/DataTableAdapter.mjs";
import {DataFetcherAdapter} from "./DataFetcher/DataFetcherAdapter.mjs";

export class CourseEditStudentsApi extends HTMLElement {

    /**
     * @type {ShadowRoot}cu
     */
    #shadow;

    /**
     * @returns {Course}
     */
    static new() {
        return new this();
    }


    /**
     * @private
     */
    constructor() {
        super();
        const service = Service.new(
            DataFetcherAdapter.new()
        );

        this.#shadow = this.attachShadow({ mode: "closed" });
        this.#shadow.append(
            service.editStudents(
                DataTableAdapter.new()
            )
       );
        document.body.appendChild(
            this.#shadow
        );
    }
}
customElements.define('flux-eco-course-edit-students', CourseEditStudentsApi);
