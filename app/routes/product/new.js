import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('product');
  },
  actions: {
    save(newProduct) {
      newProduct.save().then(() => this.transitionTo('product.list'));
    },
    cancel() {
      // rollbackAttributes() removes the record from the store
      // if the model 'isNew'
      this.controller.get('model').rollbackAttributes();
    }
  }
});
