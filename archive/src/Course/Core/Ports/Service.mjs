import {Course} from "../Domain/Course.mjs";

export class Service {
    /**
     * @type {DataFetcher}
     */
    #dataFetcher;

    /**
     * @param {DataFetcher} dataFetcher
     * @returns {Service}
     */
    static new(
        dataFetcher
    ) {
        return new this(
            dataFetcher
        );
    }


    /**
     * @param {DataFetcher} dataFetcher
     * @private
     */
    constructor(dataFetcher) {
        this.#dataFetcher = dataFetcher;
    }

    /**
     * @param {DataTable} dataTable
     * @returns {ShadowRoot}
     */
    editStudents(dataTable) {
        const course = Course.new(this.#dataFetcher);
        return course.editStudents(dataTable)
    }
}