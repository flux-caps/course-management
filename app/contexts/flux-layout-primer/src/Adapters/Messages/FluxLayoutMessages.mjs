export default class FluxLayoutMessages {

}
FluxLayoutMessages.FluxLayoutMessage = class {
  constructor(messageId, payload) {
    this.headers =  {
      messageId: messageId,
      createdDateTime: () => {const date = new Date(); return date.getUTCDate();}
    };
    this.payload = payload;
  }
};

/**
 * @property {FluxLayoutMessages.Headers} headers
 * @property {FluxLayoutMessages.Layout} payload
 */
FluxLayoutMessages.CreateMenu = class extends FluxLayoutMessage {
  /**
   * @param {FluxLayoutMessages.CustomAttributes} payload
   * @return {FluxLayoutMessages.CreateMenu}
   */
  static new(payload) {
    return new this(
      "createMenu",
      payload
    )
  }
};

/**
 * @property {FluxLayoutMessages.Headers} headers
 * @property {FluxLayoutMessages.Layout} payload
 */
FluxLayoutMessages.MenuCreated = class extends FluxLayoutMessage {
  /**
   * @param {FluxLayoutMessages.State} payload
   * @return {FluxLayoutMessages.MenuCreated}
   */
  static new(payload) {
    return new this(
      "menuCreated",
      payload
    )
  }
};


/**
 * @property {string} id
 * @property {string} htmlLayout
 */
FluxLayoutMessages.State = {};


FluxLayoutMessages.CustomAttributes = {};
/**
 * @property {string} messageId
 * @property {string} createdDateTime
 */
FluxLayoutMessages.Headers = {};