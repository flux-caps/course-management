import {TableApi} from "./../../../lib/FluxEcoWebElements/Table/src/TableApi.mjs";
import {DataTable} from "../../Course/Core/Ports/DataTable.mjs";

export class DataTableAdapter extends DataTable {

    /**
     * @returns {DataFetcherAdapter}
     */
    static new() {
        return new this(
        );
    }

    /**
     * @private
     */
    constructor() {
        super();
    }

    /**
     * @returns {HTMLTableElement}
     */
    render() {
        return TableApi.new().render()
    }
}
customElements.define('flux-eco-course-management-adapters-data-table-adapter', DataTableAdapter);
