export class AsyncApi {

  /**
   * @return {Service}
   */
  #service;
  #channels = {
    "menuLayoutPublished": new BroadcastChannel("flux-menu/menuLayoutPublished")
  }


  static new() {
    return new AsyncApi();
  }

  /**
   * @private
   */
  constructor() {
    this.#startListeners();
  }


  /**
   * @private
   */
  #startListeners() {
    const menuLayoutPublished = this.#channels["menuLayoutPublished"];
    menuLayoutPublished.addEventListener("message", async (event) => {
      await this.#onMenuLayoutPublished(event.data.payload)
    });
  }

  /**
   * @return {Promise<void>}
   * @private
   */
  async #onMenuLayoutPublished(payload) {
    await this.initService();
    console.log('onMenuLayoutPublished' + JSON.stringify(payload));
    this.#service.onMenuLayoutPublished(payload.id, payload.htmlLayout);
    this.onShadowRootCreated(payload.id);
  }

  #onShadowRootCreated(id) {
    this.#service.#onShadowRootCreated(id);
  }

  /**
   * @private
   * @return {Promise<void>}
   */
  async #initService() {
    const ServiceModule = (await import('/modules/flux-menu/src/Core/Ports/Service.mjs')).default;
    this.#service = (await ServiceModule.new());
  }
}