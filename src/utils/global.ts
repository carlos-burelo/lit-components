import { css } from 'lit';

export default css`
  @media (prefers-color-scheme: light) {
    :host {
      --text: #444;
      --title: #172334;
    }
  }
  @media (prefers-color-scheme: dark) {
    :host {
      --text: #444;
      --title: #172334;
    }
  }
  :host {
    --container: 10px 0px;
    --border-radius: 5px;
    --border: #fcfcfc;
    --blue: #6495ed;
    --green: #40e586;
    --yellow: #ffd955;
    --red: #ff6155;
    --orange: #ff8b4e;
    --violet: #8765fb;
  }
  @media screen and (min-width: 768px) {
    :host {
      --container: 20px 100px;
    }
  }
  :host {
    position: relative;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: system-ui;
  }
  :host::selection {
    background: rgb(88 132 255 / 13%);
  }
`;
