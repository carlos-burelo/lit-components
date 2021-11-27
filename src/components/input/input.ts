import { html, LitElement } from 'lit';
import { customElement, query, property } from 'lit/decorators.js';
import styles from './input.styles';

@customElement('v-input')
export class VInput extends LitElement {
  static styles = styles;
  @property() debounce: number = 0;
  @query('input', true) _input!: HTMLInputElement;
  private _dispatchEvent(event: Event) {
    setTimeout(() => {
      this.dispatchEvent(
        new CustomEvent('output', {
          detail: {
            value: this._input.value,
          },
          composed: true,
          bubbles: true,
        })
      );
      event.preventDefault();
    }, this.debounce);
  }
  render() {
    return html`<input
      @keyup=${this._dispatchEvent}
      placeholder="Write any text"
    />`;
  }
}
declare global {
  interface HTMLElementTagNameMap {
    'v-input': VInput;
  }
}
