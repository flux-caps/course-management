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

    onMenuLayoutPublished(id, htmlLayout) {
        const aggregate = Aggregate.new(id);
        aggregate.createShadowRoot(htmlLayout);
    }

}