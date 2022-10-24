import LayoutElementAggregate from "../Domain/LayoutElementAggregate.mjs";

export default class Service {
  /**
   * @type {SchemaInstances}
   */
  #schemaInstances;

  /**
   * @param {SchemaInstances} schemaInstances
   */
  static new(schemaInstances) {
    return new this(schemaInstances);
  }

  /**
   * @param {SchemaInstances} schemaInstances
   */
  constructor(schemaInstances) {
    console.log(schemaInstances);
    this.#schemaInstances = schemaInstances;
  }


  /**
   * @param {Object} customAttributes
   * @return HTMLElement
   */
  getMenuLayout(customAttributes) {
    const menu = this.#schemaInstances.menu;
    console.log(menu);
    return LayoutElementAggregate.new(
      menu, customAttributes
    ).appendInstanceChildren(
      this.#schemaInstances.menuItemSlot
    ).getHtmlElement();
  }

  /**
   * @return HTMLSlotElement
   */
  getMenuElementSlotHtml() {
    console.log(this.#schemaInstances.menuItemSlot);
    const layoutElementAggregate = LayoutElementAggregate.new(this.#schemaInstances.menuItemSlot);
    return layoutElementAggregate.getHtmlElement();
  }

}