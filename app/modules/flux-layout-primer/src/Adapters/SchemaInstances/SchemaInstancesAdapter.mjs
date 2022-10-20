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
        const obj = new this();
        obj.load();
        return obj;
    }

    constructor() {
        super();
    }

    load() {
        return  async() => await this.init()
    }


    init() {
        Promise.all([
                async () => await fetch('/modules/flux-layout-primer/src/Adapters/SchemaInstances/Menu.json').then(
                    (response) => response.json().then(
                        (json) => this.menu = json
                    )
                ),
                async () => await fetch('/modules/flux-layout-primer/src/Adapters/SchemaInstances/MenuItemSlot.json').then(
                    (response) => response.json().then(
                        (json) => this.menuItemSlot = json
                    )
                )
            ]
        ).then(r => true).finally( true);

    }
}