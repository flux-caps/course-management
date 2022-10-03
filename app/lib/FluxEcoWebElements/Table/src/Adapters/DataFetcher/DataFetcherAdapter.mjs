import {DataFetcher} from "../../Core/Ports/DataFetcher.mjs";
import {DataTableAdapter} from "../../../../../../src/Adapters/DataTable/DataTableAdapter.mjs";
import {TableApi} from "../../TableApi.mjs";

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
customElements.define('flux-eco-web-elements-table-adapters-data-fetcher-adapter', DataFetcherAdapter);
