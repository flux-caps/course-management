import {AsyncApi as FluxMenuAsyncApi} from './src/Adapters/AsyncApi.mjs'
import {default as FluxMenuCustomElement} from './src/Adapters/MenuCustomElement.mjs'
customElements.define("flux-menu", FluxMenuCustomElement);
FluxMenuAsyncApi.new();