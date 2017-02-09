import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend({
  model() {
    // ember_simple_auth-session
    // profile
    const profile = localStorage.getItem('ember_simple_auth-session');
    const profileObject = JSON.parse(profile);
    const model = {
      name: profileObject.name,
      nickname: profileObject.nickname,
      pictureUrl: profileObject.picture,
      email: profileObject.email,
      body: profile.trim()
    };
    return model;
  }
});
