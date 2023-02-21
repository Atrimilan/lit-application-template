import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('my-component')
export class MyComponent extends LitElement {
  static styles = css`
      p { 
        color: steelblue;
        font-family: 'Arial';
      }
    `;

  @property()
  name = 'world';

  render() {
    return html`<p>Hello ${this.name}!</p>`;
  }
}
