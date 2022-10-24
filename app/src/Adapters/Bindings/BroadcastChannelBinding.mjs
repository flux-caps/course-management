import courseManagementAsyncapi from '../../../asyncapi.json' assert { type: 'json' };
import FluxMenuAsyncApi from '../../../contexts/flux-menu/asyncapi.json' assert { type: 'json' };
import FluxMenuMessages
  from '../../../contexts/flux-menu/src/Adapters/Messages/FluxMenuMessages.mjs';

import FluxLayoutAsyncApi
  from '../../../contexts/flux-layout-primer/asyncapi.json' assert { type: 'json' };
import FluxLayoutMessages
  from '../../../contexts/flux-layout-primer/src/Adapters/Messages/FluxLayoutMessages.mjs';



class BroadcastChannelBinding {

  #initFluxMenuListeners() {


  }

  initListeners() {
    const onFluxMenuCreated = new BroadcastChannel(FluxMenuAsyncApi.components.channels.created.address);
    onFluxMenuCreated.addEventListener("message", (event) => {
      this.#onFluxMenuCreated(event.data.payload)
    });

    const onFluxLayoutMenuCreated = new BroadcastChannel(FluxLayoutAsyncApi.components.channels.menuCreated.address);
    onFluxLayoutMenuCreated.addEventListener("message", (event) => {
      this.#onFluxLayoutMenuCreated(event.data.payload)
    });

  }

  /**
   * @param {FluxMenuState} payload
   */
  #onFluxMenuCreated(payload) {
    const channel = new BroadcastChannel(FluxLayoutAsyncApi.components.channels.createMenu.address);
    const message = FluxLayoutMessages.CreateMenu.new(
      {
        id: payload.id
      }
    );
    channel.postMessage(
      message
    )
  }

  /**
   * @param {FluxLayoutMessages.State} payload
   */
  #onFluxLayoutMenuCreated(payload) {
    const channel = new BroadcastChannel(FluxMenuAsyncApi.components.channels.appendLayout.address);
    const message = FluxMenuMessages.AppendLayout.new(
      {
        id: payload.id,
        htmlLayout: payload.htmlLayout
      }
    );
    channel.postMessage(
      message
    )
  }

}