import asyncapi from '../../../asyncapi.json' assert { type: 'json' } ;
export default class FluxMenuChannelBinding {

  /**
   * @return {FluxMenuChannelBinding}
   */
  static new() {
    return new this();
  }

  constructor() {

  }


  /**
   * @param {string} channelAddress
   * @param {string} messageId
   * @param {FluxMenuState} payload
   */
  publish(channelAddress, messageId, payload) {
    const channel = new BroadcastChannel(channelAddress);

    /**
     * @type {{headers: {type: Headers}, payload: {type: FluxMenuState}}} Message
     */
    const message = {
      headers: this.#createHeaders(),
      payload: payload
    };

    channel.postMessage(
      message
    );
  }

  /**
   * @typedef {{messageId: {type: string}, context: {type: string}, createdDateTime: {type: string}}} Headers
   * @return {Headers}
   */
  #createHeaders(messageId) {
    const date = new Date();
    return {
      messageId: messageId,
      context: "flux-menu",
      createdDateTime: date.getUTCDate()
    }
  }
}