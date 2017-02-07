import Ember from 'ember';

/** routes/products/list.js */
export default Ember.Route.extend({
  model() {
    //console.log(Ember.$.getJSON('http://localhost:3000/products'));
    //return Ember.$.getJSON('http://localhost:3000/products');
    console.log('[routes.product.list] calling store for product');
    return this.get('store').findAll('product');
  },
  actions: {
    delete(product) {
      console.log(product);
    },
    edit(product) {
      console.log(product);
    }
  }
});
