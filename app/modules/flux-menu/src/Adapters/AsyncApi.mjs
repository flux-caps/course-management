import Service from "../Core/Ports/Service.mjs";

export default class AsyncApi {

    /**
     * @return {Service}
     */
    #service;
    #channels = {
        "menuLayoutPublished": new BroadcastChannel("flux-menu/menuLayoutPublished")
    }


    static new() {
        const obj = new AsyncApi();
        obj.initService()
        obj.startListeners();
        return obj;
    }

    /**
     * @private
     */
    constructor() {

    }

    initService() {
        //const ServiceModule = async() =>  await import('/modules/flux-menu/src/Core/Ports/Service.mjs');
        this.#service = Service.new();
    }

    /**
     * @private
     */
    startListeners() {
        const menuLayoutPublished = this.#channels["menuLayoutPublished"];
        menuLayoutPublished.addEventListener("message", (event) => {
            this.onMenuLayoutPublished(event.data.payload)
        });
    }

    /**
     * @private
     */
    onMenuLayoutPublished(payload) {
        console.log('onMenuLayoutPublished' + JSON.stringify(payload));
        this.#service.onMenuLayoutPublished(payload.id, payload.htmlLayout)
    }

}