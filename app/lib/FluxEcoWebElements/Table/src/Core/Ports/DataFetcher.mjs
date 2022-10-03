import {Aggregate} from "../Domain/Aggregate.mjs";

export class DataFetcher {
    /**
     * @returns {Promise}
     */
    async fetchData() {
        console.error("fetchdata is not implemented");
    }
}
customElements.define('flux-eco-web-elements-table-ports-data-fetcher', DataFetcher);