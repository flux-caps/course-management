import {Table} from "../Domain/Table.mjs";

export class Service {
    /**
     * @type {array}
     */
    #data;

    /**
     * @param {array} data
     * @returns {Service}
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
        this.#data = data;
    }

    /**
     * @return {HTMLElement}
     */
    render() {
        return Table.new(this.#data).render();
    }
}