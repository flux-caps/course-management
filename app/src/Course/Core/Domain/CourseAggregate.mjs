export class CourseAggregate extends HTMLElement {
    /**
     * @type {ShadowRoot}
     */
    #shadow;

    /**
     * @returns {CourseAggregate}
     */
    static new() {
        return new this(
        );
    }


    /**
     * @private
     */
    constructor() {
        super();
        this.#shadow = this.attachShadow({ mode: "closed" });
    }

    /**
     * @param {DataTable} dataTable
     */
    students(
        dataTable
    ) {
        this.#shadow.appendChild(dataTable.render());
        document.body.appendChild(this.#shadow);
    }
}
customElements.define('flux-eco-course-management-course', CourseAggregate);