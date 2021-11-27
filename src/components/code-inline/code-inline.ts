import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import styles from './code-inline.styles';

@customElement('v-code-inline')
export class VCodeInline extends LitElement {
  static styles = styles;

  render() {
    return html`<code><slot></slot></code>`;
  }
}
declare global {
  interface HTMLElementTagNameMap {
    'v-code-inline': VCodeInline;
  }
}
