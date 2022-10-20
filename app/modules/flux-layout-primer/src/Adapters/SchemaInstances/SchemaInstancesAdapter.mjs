import SchemaInstances from "../../Core/Ports/SchemaInstances.mjs";

export class SchemaInstancesAdapter extends SchemaInstances {
    /**
     * @var {Object} menu
     */
    menu;
    /**
     * @var {Object} menu
     */
    menuItemSlot;

    static new() {
       return new this();
    }

    constructor() {
        super();
    }

    async init() {
       this.menu = await (await fetch('/modules/flux-layout-primer/src/Adapters/SchemaInstances/Menu.json')).json();
       this.menuItemSlot = await (await fetch('/modules/flux-layout-primer/src/Adapters/SchemaInstances/MenuItemSlot.json')).json();
    }
}