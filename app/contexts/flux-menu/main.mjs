import {AsyncApi as FluxMenuAsyncApi} from './src/Adapters/AsyncApi.mjs'
import {MenuCustomElement as FluxMenuCustomElement} from './src/Adapters/MenuCustomElement.mjs'
FluxMenuAsyncApi.new();

addEventListener('DOMContentLoaded', (event) => {customElements.define("flux-menu", FluxMenuCustomElement);});


