import {Service} from "./Core/Ports/Service.mjs";
import {DataFetcherAdapter} from "./Adapters/DataFetcher/DataFetcherAdapter.mjs";

export class TableApi extends HTMLElement {

    /**
     * @type {DataFetcherAdapter}
     */
    #dataFetcher;

    static new() {
        return new this(
            DataFetcherAdapter.new()
        );
    }

    /**
     * @param {DataFetcherAdapter} dataFetcher
     * @private
     */
    constructor(dataFetcher) {
        super();
        this.#dataFetcher = dataFetcher;
    }

    render() {
        const service = Service.new(this.#dataFetcher);
        return service.render();
    }
}
customElements.define('flux-eco-web-elements-table', TableApi);