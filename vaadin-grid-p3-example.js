import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@vaadin/vaadin-grid/vaadin-grid';
import '@polymer/iron-ajax/iron-ajax';
/**
 * `vaadin-grid-p3-example`
 * 
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class VaadinGridP3Example extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello [[prop1]]!</h2>
      <iron-ajax auto url="https://demo.vaadin.com/demo-data/1.0/people?count=200" handle-as="json" last-response="{{users}}"></iron-ajax>

      <vaadin-grid aria-label="Basic Binding Example" items="[[users.result]]">

      <vaadin-grid-column width="60px" flex-grow="0">
        <template class="header">#</template>
        <template>[[index]]</template>
        <!-- If necessary, the footer could be set using <template class="footer"> -->
        <template class="footer">#</template>
      </vaadin-grid-column>

      <vaadin-grid-column>
        <template class="header">First Name</template>
        <template>[[item.firstName]]</template>
        <template class="footer">First Name</template>
      </vaadin-grid-column>

      <vaadin-grid-column>
        <template class="header">Last Name</template>
        <template>[[item.lastName]]</template>
        <template class="footer">Last Name</template>
      </vaadin-grid-column>

      <vaadin-grid-column width="8em">
        <template class="header">Address</template>
        <template>
          <div style="white-space: normal">[[item.address.street]], [[item.address.city]]</div>
        </template>
        <template class="footer">Address</template>
      </vaadin-grid-column>

    </vaadin-grid>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'vaadin-grid-p3-example',
      },
    };
  }
}

window.customElements.define('vaadin-grid-p3-example', VaadinGridP3Example);
