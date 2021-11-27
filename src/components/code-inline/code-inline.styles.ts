import { css } from 'lit';
import globalStyles from '../../utils/global';

export default css`
  ${globalStyles}
  :host {
    display: inline-flex;
    font-size: 20px;
    font-family: monospace;
  }
  code {
    margin: 5px 0;
    padding: 5px;
    color: var(--blue);
    background-color: #f1f1f1;
    border-radius: var(--border-radius);
  }
`;
