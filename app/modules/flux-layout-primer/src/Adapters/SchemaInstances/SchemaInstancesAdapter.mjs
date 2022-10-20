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
       await fetch('/modules/flux-layout-primer/src/Adapters/SchemaInstances/Menu.json').then(
            (response) => response.json().then(
                (json) => this.menu = json
            ));
       await fetch('/modules/flux-layout-primer/src/Adapters/SchemaInstances/MenuItemSlot.json').then(
            (response) => response.json().then(
                (json) => this.menuItemSlot = json
            ));

    }
}