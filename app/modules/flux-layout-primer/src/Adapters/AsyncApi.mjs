import {SchemaInstancesAdapter} from "./SchemaInstances/SchemaInstancesAdapter.mjs";
import Service from "../Core/Ports/Service.mjs";

export default class AsyncApi {

    #channels = {
        "getMenuLayout": new BroadcastChannel("flux-layout/getMenuLayout")
    }


    static new() {
        const obj = new AsyncApi();
        obj.startListeners();
        return obj;
    }

    async initService() {
        //const Service = async () => await import("/modules/flux-layout-primer/src/Core/Ports/Service.mjs");
        // const SchemaInstancesAdapter = async () => await import("/modules/flux-layout-primer/src/Adapters/SchemaInstances/SchemaInstancesAdapter.mjs");
        const schemaInstancesAdapter = SchemaInstancesAdapter.new();
        await schemaInstancesAdapter.init();
        const service = await Service.new(
            schemaInstancesAdapter
        );
        return service;
    }

    /**
     * @private
     */
    constructor() {

    }

    /**
     * @private
     */
    startListeners() {
        const getMenuLayout = this.#channels["getMenuLayout"];
        getMenuLayout.addEventListener("message", (event) => {
            console.log(event);
            this.onGetMenuLayout(event.data.replyTo, event.data.payload)
        });
    }

    /**
     * @private
     */
    async onGetMenuLayout(replyTo, payload) {
        const service = await this.initService();
        const htmlLayout = service.getMenuLayout(payload);
        new BroadcastChannel(replyTo).postMessage(
            {
                payload: {
                    "id": payload.id,
                    "htmlLayout": htmlLayout
                }
            }
        )
    }
}