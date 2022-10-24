export default class HtmlDocumentBinding {

  /**
   * @return {HtmlDocumentBinding}
   */
  static new() {
    return new this()
  }

  constructor() {
    this.#initHtmlDocumentBinding();
  }

  #initHtmlDocumentBinding() {
    customElements.define("flux-menu", class extends HTMLElement {
      constructor() {
        super();
      }

      async connectedCallback() {
        const ApiClass = await (await import('/modules/flux-menu/src/Adapters/Api/Api.mjs')).default;
        /**
         * @var {Api}
         */
        const api = ApiClass.new(this.id);
        await api.create()
      };
    })
  }
}