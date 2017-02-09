import Ember from 'ember';
import SweetAlertMixin from 'ember-sweetalert/mixins/sweetalert-mixin';
toast: Ember.inject.service();

/** routes/product/list.js */
export default Ember.Route.extend(SweetAlertMixin,{
  model() {
    //console.log(Ember.$.getJSON('http://localhost:3000/products'));
    //return Ember.$.getJSON('http://localhost:3000/products');
    console.log('[routes.product.list] calling store for product');
    return this.get('store').findAll('product');
  },
  actions: {
    deleteProduct(product) {
      // http://codeseven.github.io/toastr/demo.html
      // https://github.com/knownasilya/ember-toastr
      var toast = this.get('toast');
      toast.options = {
        "closeButton": true,
        "debug": false,
        "newestOnTop": true,
        "progressBar": true,
        "positionClass": "toast-top-right",
        "preventDuplicates": true,
        "onclick": null,
        "showDuration": "300",
        "hideDuration": "1000",
        "timeOut": "5000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
      };
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
          // http://stackoverflow.com/questions/27566334/ember-destroyrecord-failing
          product.destroyRecord().then(function(product) {
            console.log('product deleted');
            toast.info('Product was removed successfully.', 'Success');
          }, function(error) {
            toast.info('Product can\'t be removed!', 'Fail');
            console.log('product not deleted');
          });
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
