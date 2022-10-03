import {Aggregate} from "../Domain/Aggregate.mjs";
import {DataFetcher} from "./DataFetcher.mjs";

export class Service {

    /**
     * @type {DataFetcher}
     */
    #dataFetcher;

    /**
     * @param {DataFetcher} dataFetcher
     * @returns {Service}
     */
    static new(dataFetcher) {
        return new this(
            dataFetcher
        );
    }

    /**
     * @param {DataFetcherAdapter} dataFetcher
     * @private
     */
    constructor(dataFetcher) {
        this.#dataFetcher = dataFetcher;
    }

    render() {
        const data = this.#dataFetcher.fetchData();
        return Aggregate.new(data).render();
    }
}
customElements.define('flux-eco-web-elements-table-ports-service', Service);