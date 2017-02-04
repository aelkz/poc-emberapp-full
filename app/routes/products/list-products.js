import Ember from 'ember';

/** routes/products/list-products.js */
export default Ember.Route.extend({
  model() {
    console.log(Ember.$.getJSON('http://localhost:3000/products'));
    return Ember.$.getJSON('http://localhost:3000/products');
  },
  actions: {
    delete(product) {
      product.deleteRecord();
      product.save();
    },
    edit(product) {
      //product.
      product.save();
    }
  }
});
