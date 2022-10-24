import FluxLayoutMessages
  from '../../../../flux-layout-primer/src/Adapters/Messages/FluxLayoutMessages.mjs';

export default class FluxMenuMessages {

}
/**
 * @property {FluxMenuMessages.Headers} headers
 * @property {FluxMenuMessages.Layout} payload
 */
FluxMenuMessages.AppendLayout = class {
  /**
   * @param {FluxMenuMessages.Layout} payload
   * @return {FluxMenuMessages.AppendLayout}
   */
  static new(payload) {
    return new this(
      {
        messageId: "appendLayout",
        createdDateTime: () => {const date = new Date(); return date.getUTCDate();}
      },
      payload)
  }
  constructor(headers, payload) {
    this.headers = headers;
    this.payload = payload;
  }
};

/**
 * @property {string} id
 * @property {string} htmlLayout
 */
FluxMenuMessages.Layout = {};

/**
 * @property {string} messageId
 * @property {string} createdDateTime
 */
FluxMenuMessages.Headers = {};