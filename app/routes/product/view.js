import Ember from 'ember';

/**
 * https://github.com/samselikoff/ember-cli-mirage/issues/406
 */

export default Ember.Route.extend({
  model(params) {
    //return this.store.findRecord('product', params.id); // NOT WORKING
    return this.store.queryRecord('product', params.id); // WORKING
    //return {
    //  data: this.store.product.map(attrs => (
    //    {type: 'product', id: attrs.id, attributes: attrs }
    //  ))
    //};
  },
  actions: {
    cancel() {
      this.transitionTo('product.list');
    }
  }
});
