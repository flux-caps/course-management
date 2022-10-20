import {SchemaInstancesAdapter} from "./SchemaInstances/SchemaInstancesAdapter.mjs";
import Service from "../Core/Ports/Service.mjs";

export default class AsyncApi {

    /**
     * @type {Service}
     */
    service;
    #channels = {
        "getMenuLayout": new BroadcastChannel("flux-layout/getMenuLayout")
    }


    static new() {
        const obj = new AsyncApi();
        obj.initService();
        obj.startListeners();
        return obj;
    }

    initService() {
        //const Service = async () => await import("/modules/flux-layout-primer/src/Core/Ports/Service.mjs");
        // const SchemaInstancesAdapter = async () => await import("/modules/flux-layout-primer/src/Adapters/SchemaInstances/SchemaInstancesAdapter.mjs");
        const schemaInstancesAdapter = SchemaInstancesAdapter.new();
        this.service = Service.new(
            schemaInstancesAdapter
        );
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
    onGetMenuLayout(replyTo, payload) {
        const htmlLayout = this.service;
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