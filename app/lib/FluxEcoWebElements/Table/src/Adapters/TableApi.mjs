import {Service} from "../Core/Ports/Service.mjs";
export class TableApi {

    /**
     * @type {array}
     */
    #data;

    /**
     * @param {array} data
     * @returns {TableApi}
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
        const service = Service.new(this.#data);
        return service.render();
    }
}