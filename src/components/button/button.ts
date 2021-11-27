import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { styleMap } from 'lit/directives/style-map.js';
import styles from './button.styles';

@customElement('v-button')
export class VButton extends LitElement {
  static styles = styles;
  @property() data!: string;
  @property() color!: 'blue' | 'green' | 'yellow' | 'red' | 'orange';
  render() {
    return html`
      <button
        class="btn"
        style=${styleMap({
          background: `var(--${this.color})`,
        })}
      >
        ${this.data ? html`${this.data}` : html`<slot></slot>`}
      </button>
    `;
  }
}
declare global {
  interface HTMLElementTagNameMap {
    'v-button': VButton;
  }
}
