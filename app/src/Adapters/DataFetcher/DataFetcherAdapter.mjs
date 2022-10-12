import {DataFetcher} from "../../Course/Core/Ports/DataFetcher.mjs";

export class DataFetcherAdapter extends DataFetcher {

    /**
     * @returns {DataFetcherAdapter}
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
    async fetchData() {
        return await fetch('students.json')
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error: ${response.status}`);
                }
                return response.json();
            })
            .catch((err) => console.error(`Fetch problem: ${err.message}`));
    }

}