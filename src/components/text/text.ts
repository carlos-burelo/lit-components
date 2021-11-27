import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import styles from './text.styles';

@customElement('v-text')
export class VText extends LitElement {
  static styles = styles;

  @property() data!: string;

  render() {
    return this.data ? html`<p>${this.data}</p>` : html`<p><slot></slot></p>`;
  }
}
declare global {
  interface HTMLElementTagNameMap {
    'v-text': VText;
  }
}
