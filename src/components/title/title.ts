import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import styles from './title.styles';

@customElement('v-title')
export class VTitle extends LitElement {
  static styles = styles;
  @property()
  data!: string;

  render() {
    return this.data
      ? html`<h1>${this.data}</h1>`
      : html`<h1><slot></slot></h1>`;
  }
}
declare global {
  interface HTMLElementTagNameMap {
    'v-title': VTitle;
  }
}
