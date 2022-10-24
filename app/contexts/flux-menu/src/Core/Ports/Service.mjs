import Aggregate from "../Domain/Aggregate.mjs";

export default class Service {
    /**
     * @return Service
     */
    static new() {
        return new this();
    }

    constructor() {

    }

    create(id) {
        const aggregate = Aggregate.new(id);
        aggregate.createShadowRoot()
    }

    onMenuLayoutPublished(id, htmlLayout) {
        const aggregate = Aggregate.new(id);
        console.log("ddddwww");
        aggregate.createShadowRoot(htmlLayout);
    }

    async onShadowRootCreated(id) {
        const aggregate = Aggregate.new(id);

        const links = await (await fetch('/api/flux-menu/edit-students.json')).json();
        aggregate.setLinks(links);
    }
}