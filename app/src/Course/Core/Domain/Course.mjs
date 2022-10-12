export class Course extends HTMLElement {

    /**
     * @type {DataFetcher}
     */
    #dataFetcher;

    /**
     * @param {DataFetcher} dataFetcher
     * @returns {Course}
     */
    static new(dataFetcher) {
        return new this(
            dataFetcher
        );
    }


    /**
     * @param {DataFetcher} dataFetcher
     * @private
     */
    constructor(dataFetcher) {
        super();
        this.#dataFetcher = dataFetcher;
    }

    /**
     * @param {DataTable} dataTable
     * @returns HTMLElement
     */
    editStudents(
        dataTable
    ) {
        return dataTable.render(
            this.#dataFetcher.fetchData()
        )
    }
}
customElements.define('flux-eco-course', Course);