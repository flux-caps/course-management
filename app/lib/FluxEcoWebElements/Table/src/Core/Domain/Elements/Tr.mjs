import {Td} from "./Td.mjs";

export class Tr extends HTMLElement {
    /**
     * @type {object}
     */
    #item;

    /**
     * @param {object} item
     * @returns {Tr}
     */
    static new(item) {
        return new this(
            item
        );
    }

    /**
     * @param {object} item
     * @private
     */
    constructor(item) {
        super();
        this.#item = item;
    }

    render() {
        const tr = document.createElement("tr");
        for(const key in this.#item) {
            tr.append(Td.new(this.#item[key]).render());
        }
        return tr;
    }
}
customElements.define('flux-eco-web-elements-table-core-tr', Tr);