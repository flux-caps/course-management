import {Tr} from "./Elements/Tr.mjs";

export class Table extends HTMLElement {
    /**
     * @type {HTMLTableElement}
     */
    #table;

    /**
     * @type {Promise}
     */
    #data;

    /**
     * @param {Promise} data
     * @returns {Table}
     */
    static new(data) {
        return new this(
            data
        );
    }

    /**
     * @param {Promise} data
     * @private
     */
    constructor(data) {
        super();
        this.#data = data;
        this.#table = document.createElement("table");
    }

    /**
     * @private
     */
    async resolveData() {

    }

    /**
     * @returns {HTMLTableElement}
     */
    render() {
        this.#data.then(data => {
            for (let i = 0; i < data.length; i++) {
                const tr = document.createElement("table");
                this.#table.appendChild(
                    Tr.new(data[i]).render()
                );
            }
        });

        return this.#table;
    }
}

customElements.define('flux-eco-web-elements-table-core-aggregate', Table);