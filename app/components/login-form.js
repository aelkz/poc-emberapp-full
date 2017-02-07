/* global Auth0Lock */

/*jshint unused:false*/
import Ember from 'ember';
import config from 'starter-seed/config/environment';

const { service } = Ember.inject;

// Lock: User configurable options
const options = {
  auth: {
    params: {scope: 'openid email'},
    redirectUrl: 'http://localhost:4200/callback',
    responseType: 'token'
  }
};

var lock = new Auth0Lock(config.Auth0.clientId, config.Auth0.domain, options);

export default Ember.Component.extend({
  didRender: function() {
    this._super(...arguments);
    lock.show();

  },

  willDestroyElement: function() {
    lock.hide();
  }
});
