import Ember from 'ember';

/** routes/products/list.js */
export default Ember.Route.extend({
  model() {
    console.log(Ember.$.getJSON('http://localhost:3000/products'));
    return Ember.$.getJSON('http://localhost:3000/products');
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
