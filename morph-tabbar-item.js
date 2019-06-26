import { LitElement, html, css } from 'lit-element';
import '@moduware/morph-ripple/morph-ripple.js';
import '@moduware/morph-shared-colors/morph-shared-colors.js';
import { getPlatform } from '@moduware/lit-utils';

/**
 * `morph-tabbar-item`
 * Tab bar item for polymorph components
 *
 * @customElement
 * @extends HTMLElement
 * 
 * @demo morph-tabbar-item/demo/index.html
 */
class MorphTabbarItem extends LitElement {
  static get styles() {
    return [
      css`
        :host {
          --ios-grey:var(--polymorph-ios-gray-color);
          --android-white: #fff;
          --selected-label-color-ios: var(--polymorph-ios-blue-color);
          --selected-label-color-android: var(--android-white);
          --ripple-color-selected: var(--selected-label-color-android);
      
      
          display: flex;
          justify-content: stretch;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .container {
          display: flex;
          flex-grow: 1;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
          align-content: center;
        }
      
        :host([platform="ios"]) {
          --color: var(--ios-grey);
          color: var(--color);
          /*padding-top: 4px;
          padding-bottom: 4px;*/
          font-family: -apple-system, 'SF UI Text', 'Helvetica Neue', Helvetica, Arial, sans-serif;
        }
      
        :host([platform="android"]) {
          --color: var(--android-white);
      
          color: var(--color);
          /*padding-top: 12px;
          padding-bottom: 12px;*/
          font-family: Roboto, Noto, Helvetica, Arial, sans-serif;
        }
      
        :host([platform="android"][selected][has-label])  .label {
          color: var(--selected-label-color-android);
        }
      
        :host([platform="ios"][selected][has-label])  .label {
          color: var(--selected-label-color-ios);
        }
      
        .text {
          display: inline-block;
        }
      
        :host([has-label]) .label {
          display: block;
          margin: 0;
          position: relative;
          width: 100%;
        }
      
        :host([platform="ios"][has-label]) .label {
          color: var(--color);
          line-height: 10px;
          margin: 0;
          font-family: "-apple-system", "SF UI Text", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
          letter-spacing: .01em;
          font-size: 10px;
        }
      
        :host([platform="android"][has-label]) .label {
          line-height: 1;
          color: var(--color);
          margin: 0;
          margin-top:10px;
          font-family: "Roboto", "Noto", "Arial", sans-serif;
          text-transform: uppercase;
          letter-spacing: .01em;
          font-size: 14px;
          max-width: 100%;
        }
      
        :host(:not([has-label])) .label {
          display: none;
        }
      
        :host(:not([platform=android])) morph-ripple {
          display: none;
        }
      
        :host([platform="android"]) morph-ripple {
          --ripple-color: var(--color);
        }
      
        :host([platform="android"][selected]) morph-ripple, 
        :host([platform="android"][selected][has-label]) morph-ripple {
          --ripple-color: var(--ripple-color-selected);
        }
      
        :host([no-image]) img#icon {
          visibility: hidden;
        }
      `
    ];
  }

  render() {
    return html`

      <div name="${this.name}" class="container">
        <slot name="icon-badge"></slot>
        ${this.noImage 
          ? html``
          : html`<img class="icon" id="icon" src="${this.selected ? this.selectedImage : this.notSelectedImage}">`
        }
        <div id="label" class="label"><slot id="slot"></slot></div>
        <morph-ripple></morph-ripple>
      </div>

    `;
  }

  static get is() { return 'morph-tabbar-item'; }

  static get properties() {
    return {
      platform: { 
        type: String, 
        reflect: true
      },

      name: {
        type: String,
        reflect: true
      },
      selectedImage: {
        type: String,
        reflect: true,
        attribute: 'selected-image'
      },
      notSelectedImage: {
        type: String,
        reflect: true,
        attribute: 'not-selected-image'
      },
      selected: {
        type: Boolean,
        reflect: true
      },
      hasLabel: {
        type: Boolean,
        reflect: true
      },
      noImage: {
        type: Boolean,
        reflect: true
      }
    };
  }

  constructor() {
    super();

    this.noImage = false;
    this.hasLabel = false;
    this.selected = false;
  }

  /**
   * lit-element lifecycle called once before the first updated().
   */
  firstUpdated() {
    super.firstUpdated();
    // check first if platform assigned in html markup before using getPlatform to auto detect platform
    if (!this.hasAttribute('platform')) {
      this.platform = getPlatform();
    }
  }
}

window.customElements.define(MorphTabbarItem.is, MorphTabbarItem);