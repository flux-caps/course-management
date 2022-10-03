import { Tr } from "./Elements/Tr.mjs";
export class Aggregate extends HTMLElement {
    /**
     * @type {array}
     */
    #data;

    /**
     * @param {array} data
     * @returns {Aggregate}
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
    }

    /**
     * @returns {HTMLTableElement}
     */
    render() {
        const table = document.createElement("table");

        console.log(this.#data);

        for (let i = 0; i < this.#data.length; i++) {
            const tr = document.createElement("table");
            table.appendChild(
                Tr.new(this.#data[i]).render()
            );
        }
        return table;
    }
}
customElements.define('flux-eco-web-elements-table-core-aggregate', Aggregate);