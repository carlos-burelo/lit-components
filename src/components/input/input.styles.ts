import { css } from 'lit';
import globalStyles from '../../utils/global';

export default css`
  ${globalStyles}
  input {
    padding: 10px 18px;
    background-color: transparent;
    border: none;
    border-radius: var(--border-radius);
    outline: solid 2px var(--title);
    font-size: 14px;
    color: var(--title);
    transition: outline 0.25s ease-in-out;
  }
  input:hover,
  input:focus {
    outline: solid 2px var(--blue);
  }
`;
