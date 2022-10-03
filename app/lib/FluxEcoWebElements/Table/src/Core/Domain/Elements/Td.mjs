import {DataFetcherAdapter} from "../../../Adapters/DataFetcher/DataFetcherAdapter.mjs";

export class Td extends HTMLElement {
    /**
     * @type {string}
     */
    #innerText;

    /**
     * @param {string} innerText
     * @returns {Td}
     */
    static new(innerText) {
        return new this(
            innerText
        );
    }

    /**
     * @param {string} innerText
     * @private
     */
    constructor(innerText) {
        super();
        this.#innerText = innerText;
    }

    render() {
        const td = document.createElement("td");
        td.innerText = this.#innerText
        return td;
    }
}
customElements.define('flux-eco-web-elements-table-core-td', Td);