import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),
  actions: {
    transitionToLoginRoute() {
      this.transitionToRoute('login');
    },
    transitionToHomeRoute() {
      this.transitionToRoute('index');
    }
  }
});
