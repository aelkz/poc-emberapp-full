import Ember from 'ember';
import SweetAlertMixin from 'ember-sweetalert/mixins/sweetalert-mixin';

/** routes/products/list.js */
export default Ember.Route.extend(SweetAlertMixin,{
  model() {
    //console.log(Ember.$.getJSON('http://localhost:3000/products'));
    //return Ember.$.getJSON('http://localhost:3000/products');
    console.log('[routes.product.list] calling store for product');
    return this.get('store').findAll('product');
  },
  actions: {
    deleteProduct(product) {
      console.log('preparing to delete product id#'+product.id);
      let sweetAlert = this.get('sweetAlert');

      // https://github.com/limonte/sweetalert2
      sweetAlert({
        title: "Are you sure?",
        html: 'Would you like to remove this product?<br>(the product will be deleted permanently)',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "Yes",
        allowOutsideClick: false
      }).then(
        (confirm)=> {
          product.destroyRecord();
          this.transitionTo('product.list');
        },
        (cancel)=> {
          console.log('nothing here');
        }
      );
    },
    edit(product) {
      console.log(product);
    }
  }
});
