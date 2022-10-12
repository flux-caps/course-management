import {TableApi} from "../../../lib/FluxEcoWebElements/Table/src/Adapters/TableApi.mjs";
import {DataTable} from "../../Course/Core/Ports/DataTable.mjs";

export class DataTableAdapter extends DataTable {

    /**
     * @returns {DataTable}
     */
    static new() {
        return new this();
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
    render(data) {
        return TableApi.new(data).render()
    }
}
