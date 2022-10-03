export class DataFetcher extends HTMLElement {

    /**
     * @returns {DataFetcher}
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
    }

    /**
     * @returns {array}
     */
    fetchData() {
        const response = fetch('students.json')
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error: ${response.status}`);
                }
                return response.json();
            })
            .catch((err) => console.error(`Fetch problem: ${err.message}`));

        return response;
    }

}
customElements.define('flux-eco-data-fetcher', DataFetcher);
