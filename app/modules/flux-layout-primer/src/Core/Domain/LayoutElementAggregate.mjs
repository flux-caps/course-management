export default class LayoutElementAggregate {

    /**
     * @type HTMLElement
     */
    #htmlElement;

    /**
     * @param schemaInstance
     * @param customAttributes
     * @return {LayoutElementAggregate}
     */
    static new(schemaInstance, customAttributes = null) {
        return new this(schemaInstance, customAttributes);
    }

    constructor(schemaInstance, customAttributes) {
        this.create(schemaInstance);
        this.assignInstanceAttributes(schemaInstance);
        this.appendInstanceChildren(schemaInstance);

        this.assignCustomAttributes(customAttributes)
    }

    /**
     * @param {HTMLElement} htmlElement
     * @return {LayoutElementAggregate}
     */
    appendHtmlElementChild(htmlElement) {
        this.applyAppendInstanceChild(htmlElement)
        return this;
    }

    /**
     * @private
     * @param {HTMLElement} htmlElement
     */
    applyAppendHtmlElementChild(htmlElement) {
        this.#htmlElement.appendChild(htmlElement);
    }

    /**
     * @private
     * @param {object} schemaInstance
     */
    create(schemaInstance) {
        console.log(schemaInstance);
        this.applyCreated(document.createElement(schemaInstance.tagName))
    }

    /**
     * @private
     */
    applyCreated(schemaInstance) {
        this.#htmlElement = schemaInstance
    }

    /**
     * @private
     */
    assignInstanceAttributes(schemaInstance) {
        if (schemaInstance.hasOwnProperty('attributes')) {
            this.applyAssignAttributes(schemaInstance.attributes)
        }
    }

    /**
     * @private
     * @param {object} attributes
     */
    applyAssignAttributes(attributes) {
        Object.entries(attributes).forEach(
            (([key, value]) => {
                    this.#htmlElement.setAttribute(key, value)
                }
            )
        )
    }

    /**
     * @private
     * @param {object} schemaInstance
     */
    appendInstanceChildren(schemaInstance) {
        if (schemaInstance.hasOwnProperty('children')) {
            console.log(schemaInstance.children);
            this.applyAppendInstanceChildren(schemaInstance.children)
        }
    }

    /**
     * @private
     * @param {array} listOfSchemaInstances
     */
    applyAppendInstanceChildren(listOfSchemaInstances) {
        listOfSchemaInstances.forEach(
            (schemaInstance) => {
                this.applyAppendInstanceChild(schemaInstance)
            }
        )
    }

    /**
     * @private
     * @param {SchemaInstances} schemaInstance
     * @param {Object} customAttributes
     */
    applyAppendInstanceChild(schemaInstance, customAttributes= null) {
        console.log(schemaInstance);
        this.#htmlElement.appendChild(LayoutElementAggregate.new(schemaInstance, customAttributes).getHtmlElement())
    }

    /**
     * @private
     * @param {object} customAttributes
     */
    assignCustomAttributes(customAttributes) {
        if (customAttributes !== null) {
            console.log(customAttributes);
            this.applyAssignAttributes(customAttributes)
        }
    }



    /**
     * @return {HTMLElement}
     */
    getHtmlElement() {
        return this.#htmlElement
    }
}