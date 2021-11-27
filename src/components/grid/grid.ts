import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';
import styles from './grid.syles';

@customElement('v-grid')
export class VGrid extends LitElement {
  static styles = styles;
  @property()
  rows!: number;

  @property()
  cols!: number;

  @property()
  gap!: number;

  render() {
    return html`
      <section
        style=${styleMap({
          gridTemplateColumns: `repeat(${this.rows || '3'}, 1fr)`,
          gridTemplateRows: `repeat(${this.cols || '2'}, 1fr)`,
          gap: `${this.gap || '0'}px`,
        })}
      >
        <slot></slot>
      </section>
    `;
  }
}
declare global {
  interface HTMLElementTagNameMap {
    'v-grid': VGrid;
  }
}
