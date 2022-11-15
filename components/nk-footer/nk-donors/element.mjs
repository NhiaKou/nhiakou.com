import template from './template.mjs';

class NkDonors extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
        this.style.display = 'block';
    }
}

customElements.define("nk-donors", NkDonors);