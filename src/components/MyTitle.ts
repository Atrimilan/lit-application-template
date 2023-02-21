import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('my-title')
export class MyTitle extends LitElement {
  static styles = css`
      h1 { 
        font-family: 'Arial';
      }
    `;

  render() {
    return html`<h1>Welcome to this template</h1>`;
  }
}
