/**
 * @property {string} id
 */
export default class FluxMenuState {
  /**
   * @param {string} id
   * @return FluxMenuState
   */
  static new(id) {
    return new this(id)
  }

  /**
   * @private
   */
  constructor(id) {
    this.id = id;
  }
}