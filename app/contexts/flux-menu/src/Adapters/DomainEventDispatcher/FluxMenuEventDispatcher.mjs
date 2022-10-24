import DomainEventDispatcher from '../../Core/Ports/DomainEventDispatcher.mjs';
import FluxMenuChannelBinding from '../Bindings/FluxMenuChannelBinding.mjs';
import fluxMenuAsyncApi from '../../../asyncapi.json' assert { type: 'json' } ;

class FluxMenuEventDispatcher extends DomainEventDispatcher {

  static new() {
    return new this();
  }

  /**
   * @private
   */
  constructor(options = {}) {
    super();
  }

  created(state) {
    const channel = FluxMenuChannelBinding.new();
    channel.publish(
      fluxMenuAsyncApi.components.operations.onCreated.channelId,
      fluxMenuAsyncApi.components.operations.onCreated.send,
      state
    )
  }
}