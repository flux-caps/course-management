export default class MenuCustomElement extends HTMLElement {
    connectedCallback() {
        const getMenuLayout = new BroadcastChannel("flux-layout/getMenuLayout");
        const message = {
            replyTo: "flux-menu/menuLayoutPublished",
            payload: {
                id: this.id
            }
        }

        getMenuLayout.postMessage(
            message
        );
    }
}