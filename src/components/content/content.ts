import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import styles from './content.styles';

@customElement('v-content')
export class VContent extends LitElement {
  static styles = styles;
  @property()
  data!: string;

  render() {
    return html`<main class="vContent"><slot></slot></main>`;
  }
}
declare global {
  interface HTMLElementTagNameMap {
    'v-content': VContent;
  }
}
