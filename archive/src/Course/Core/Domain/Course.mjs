export class Course {
    /**
     * HTMLElement
     */
    #coursePage;
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
        this.#coursePage = document.createElement("span");
        this.#dataFetcher = dataFetcher;
    }

    /**
     * @param {DataTable} dataTable
     * @returns HTMLElement
     */
    editStudents(
        dataTable
    ) {
        this.#coursePage.appendChild(
            dataTable.render(
            this.#dataFetcher.fetchData()
        ));
        return this.#coursePage;
    }
}