import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {};
  },
  actions: {
    save() {
      const newProduct = this.get('store').createRecord('product', this.currentModel);
      newProduct.save().then((product) => {
        this.transitionTo('product', product);
      });
    },
    cancel() {
      this.transitionTo('product');
    }
  }
});
