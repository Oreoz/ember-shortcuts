'use babel';

import { CompositeDisposable } from 'atom';
import { firstHandlebarsComponentInLine } from './editor-utilities';
import {
  openComponent,
  toggleBetweenTestAndTarget,
  toggleBetweenJavascriptAndTemplate,
  toggleBetweenControllerAndRoute
} from './file-utilities';

export default {

  subscriptions: null,

  activate(state) {
    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'ember-shortcuts:open-component': () => this.openSelectedComponent(),
      'ember-shortcuts:open-related-test': () => this.openRelatedTest(),
      'ember-shortcuts:toggle-between-javascript-and-hbs': () => this.toggleJavascriptHandlebars(),
      'ember-shortcuts:toggle-between-controller-and-route': () => this.toggleControllerRoute()
    }));
  },

  deactivate() {
    this.subscriptions.dispose();
  },

  serialize() {},

  openSelectedComponent() {
    let componentName = firstHandlebarsComponentInLine();
    openComponent(componentName);
  },

  openRelatedTest() {
    toggleBetweenTestAndTarget();
  },

  toggleJavascriptHandlebars() {
    toggleBetweenJavascriptAndTemplate();
  },

  toggleControllerRoute() {
    toggleBetweenControllerAndRoute();
  }

};