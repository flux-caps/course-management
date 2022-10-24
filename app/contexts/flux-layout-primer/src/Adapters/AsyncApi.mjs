import {SchemaInstancesAdapter} from "./SchemaInstances/SchemaInstancesAdapter.mjs";
import Service from "../Core/Ports/Service.mjs";

export default class AsyncApi {

    #service;


    static new() {
        return new this();
    }

    async initService() {
        //const Service = async () => await import("/modules/flux-layout-primer/src/Core/Ports/Service.mjs");
        // const SchemaInstancesAdapter = async () => await import("/modules/flux-layout-primer/src/Adapters/SchemaInstances/SchemaInstancesAdapter.mjs");
        const schemaInstancesAdapter = SchemaInstancesAdapter.new();
        await schemaInstancesAdapter.init();
        this.#service = await Service.new(
            schemaInstancesAdapter
        );
    }

    /**
     * @private
     */
    constructor() {
        this.#startListeners()
    }

    /**
     * @private
     */
    #startListeners() {
        const getMenuLayout = new BroadcastChannel("flux-layout/getMenuLayout")
        getMenuLayout.addEventListener("message", (event) => {
            console.log(event);
            this.#onGetMenuLayout(event.data.replyTo, event.data.payload)
        });
    }

    /**
     * @private
     */
    async #onGetMenuLayout(replyTo, payload) {
        await this.initService();
        const htmlLayout = this.#service.getMenuLayout(payload);
        const channel = new BroadcastChannel(replyTo)
        channel.postMessage(
            {
                payload: {
                    "id": payload.id,
                    "htmlLayout": htmlLayout.outerHTML
                }
            }
        )
    }
}