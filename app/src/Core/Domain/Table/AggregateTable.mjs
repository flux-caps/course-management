import { Tr } from "./Elements/Tr.mjs";
export class AggregateTable extends HTMLElement {
    /**
     * @type {ShadowRoot}
     */
    #shadow;
    /**
     * @type {array}
     */
    #data;

    /**
     * @param {array} data
     * @returns {AggregateTable}
     */
    static new(data) {
        return new this(
            data
        );
    }

    /**
     * @param {array} data
     * @private
     */
    constructor(data) {
        super();
        this.#data = data;
        this.#shadow = this.attachShadow({ mode: "closed" });
    }

    render() {
        const table = document.createElement("table");
        for (let i = 0; i < this.#data.length; i++) {
            table.appendChild(
                Tr.new(this.#data[i]).render()
            );
        }
        this.#shadow.appendChild(table);
        document.body.appendChild(this.#shadow);
    }
}
customElements.define('flux-eco-table-aggregate', AggregateTable);