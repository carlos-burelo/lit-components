import { css } from 'lit';
import globalStyles from '../../utils/global';

export default css`
  ${globalStyles}
  :host {
    display: inline-flex;
  }
  .btn {
    padding: 0.6em 1em;
    border: solid 2px var(--title);
    border-radius: var(--border-radius);
    color: var(--title);
    font-weight: 500;
    background-color: transparent;
    cursor: pointer;
    margin: 5px 5px;
    position: relative;
  }
`;
